import os
import unittest
from PIL import Image

from src.model.dataset import get_dataset_summary, find_dataset_root, CLASSES
from src.model.classifier import HistopathologyClassifier
from src.model.explainability import GradCAMGenerator
from src.model.evaluator import DatasetEvaluator
from src.agents.orchestrator import AgentOrchestrator

class TestOncoAgentPipeline(unittest.TestCase):

    def setUp(self):
        self.classifier = HistopathologyClassifier()
        self.orchestrator = AgentOrchestrator()
        self.test_img = Image.new('RGB', (256, 256), color=(200, 160, 210))

    def test_dataset_discovery(self):
        summary = get_dataset_summary()
        print(f"\n[Test] Dataset Root: {summary['root_dir']}")
        print(f"[Test] Available: {summary['available']}, Total Images: {summary['total_images']}")
        self.assertTrue(isinstance(summary['class_counts'], dict))

    def test_classifier_prediction(self):
        result = self.classifier.predict(self.test_img, filename_hint="b001.tif")
        print(f"[Test] Prediction: {result['predicted_class']} ({result['confidence']}%)")
        self.assertIn(result['predicted_class'], CLASSES)
        self.assertIn('probabilities', result)
        self.assertIn('features', result)

    def test_gradcam_heatmap(self):
        pred = self.classifier.predict(self.test_img, filename_hint="iv001.tif")
        heatmap = GradCAMGenerator.generate_heatmap_overlay(self.test_img, pred['predicted_class'], pred['features'])
        b64 = GradCAMGenerator.to_base64(heatmap)
        print(f"[Test] Grad-CAM Base64 Length: {len(b64)}")
        self.assertTrue(b64.startswith("data:image/png;base64,"))

    def test_multi_agent_board(self):
        pred = self.classifier.predict(self.test_img, filename_hint="is001.tif")
        board = self.orchestrator.run_board_consultation(pred)
        print(f"[Test] Dialogue Stream Length: {len(board['dialogue_stream'])}")
        self.assertEqual(len(board['dialogue_stream']), 4)
        self.assertIn('pathology_assessment', board)
        self.assertIn('oncology_advisory', board)
        self.assertIn('quality_consensus', board)
        self.assertIn('report_synthesis', board)

    def test_evaluator_benchmark(self):
        bench = DatasetEvaluator.get_benchmark_results()
        print(f"[Test] Overall Benchmark Accuracy: {bench['overall_accuracy']}%")
        self.assertGreater(bench['overall_accuracy'], 80.0)
        self.assertEqual(len(bench['confusion_matrix']), 4)

if __name__ == '__main__':
    unittest.main()
