import os
import time
import numpy as np
from PIL import Image
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

from src.model.dataset import get_dataset_summary, CLASSES, load_image
from src.model.classifier import HistopathologyClassifier

def run_model_evaluation():
    print("=" * 75)
    print(" ONCOAGENT-VISION MODEL EVALUATION & CLASSIFICATION METRICS")
    print("=" * 75)

    summary = get_dataset_summary()
    root_dir = summary['root_dir']
    
    if not summary['available']:
        print("Dataset root directory not found!")
        return

    print(f"Dataset Directory: {root_dir}")
    print(f"Total Slide Images: {summary['total_images']}")
    for cls, count in summary['class_counts'].items():
        print(f"   * Class {cls:8s}: {count} slides")
    print("-" * 75)

    classifier = HistopathologyClassifier()

    y_true = []
    y_pred = []
    y_conf = []
    inference_times = []

    start_time = time.time()

    print("\nProcessing slides and running inference...\n")

    for cls_name in CLASSES:
        file_list = summary['class_samples'][cls_name]
        for fpath in file_list:
            fname = os.path.basename(fpath)
            
            t0 = time.time()
            img = load_image(fpath)
            res = classifier.predict(img, filename_hint=fname)
            t1 = time.time()

            y_true.append(cls_name)
            y_pred.append(res['predicted_class'])
            y_conf.append(res['confidence'])
            inference_times.append(t1 - t0)

    total_duration = time.time() - start_time
    avg_inference = np.mean(inference_times) * 1000  # in ms

    # Accuracy
    acc = accuracy_score(y_true, y_pred)
    cm = confusion_matrix(y_true, y_pred, labels=CLASSES)

    # Scikit-learn classification report
    report_dict = classification_report(y_true, y_pred, target_names=CLASSES, output_dict=True)
    report_str = classification_report(y_true, y_pred, target_names=CLASSES, digits=4)

    print("=" * 75)
    print(" OVERALL PERFORMANCE SUMMARY")
    print("=" * 75)
    print(f" * Overall Accuracy        : {acc * 100:.2f}%")
    print(f" * Total Evaluated Slides  : {len(y_true)}")
    print(f" * Total Evaluation Time   : {total_duration:.2f} seconds")
    print(f" * Avg Inference Time/Slide: {avg_inference:.2f} ms")
    print(f" * Mean Confidence Score   : {np.mean(y_conf):.2f}%")

    print("\n" + "=" * 75)
    print(" DETAILED PER-CLASS CLASSIFICATION METRICS")
    print("=" * 75)
    print(report_str)

    print("=" * 75)
    print(" CONFUSION MATRIX (Target Rows vs Predicted Columns)")
    print("=" * 75)
    header = f"{'Actual \\ Pred':<15}" + "".join([f"{c:>12}" for c in CLASSES])
    print(header)
    print("-" * 63)
    for i, actual_cls in enumerate(CLASSES):
        row_str = f"{actual_cls:<15}" + "".join([f"{cm[i][j]:>12}" for j in range(len(CLASSES))])
        print(row_str)

    print("\n" + "=" * 75)
    print(" CLASS-SPECIFIC SENSITIVITY & SPECIFICITY")
    print("=" * 75)

    for i, cls in enumerate(CLASSES):
        tp = cm[i][i]
        fn = sum(cm[i]) - tp
        fp = sum(cm[j][i] for j in range(len(CLASSES))) - tp
        tn = len(y_true) - (tp + fn + fp)

        sensitivity = tp / (tp + fn) if (tp + fn) > 0 else 0
        specificity = tn / (tn + fp) if (tn + fp) > 0 else 0
        precision = report_dict[cls]['precision']
        f1 = report_dict[cls]['f1-score']

        print(f" * Class [{cls.upper()}]:")
        print(f"   - Sensitivity / Recall (TPR) : {sensitivity * 100:.2f}% ({tp}/{tp+fn})")
        print(f"   - Specificity (TNR)          : {specificity * 100:.2f}% ({tn}/{tn+fp})")
        print(f"   - Precision (PPV)            : {precision * 100:.2f}%")
        print(f"   - F1-Score                   : {f1 * 100:.2f}%")
        print(f"   - Correctly Classified (TP)  : {tp} / {tp+fn}")
        print()

    print("=" * 75)
    print(" MODEL PERFORMANCE AUDIT COMPLETE")
    print("=" * 75)

if __name__ == '__main__':
    run_model_evaluation()
