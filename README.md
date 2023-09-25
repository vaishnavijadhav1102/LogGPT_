# SIH_LogGPT
Welcome to the LogGPT! This repository houses an innovative system that harnesses the power of advanced technologies, including machine learning and artificial intelligence, to analyze log data from IT systems. With this project, you can gain valuable insights, detect anomalies, and enhance the management of your IT infrastructure.

## Features

- **Advanced Machine Learning**: Our system leverages state-of-the-art machine learning algorithms to make sense of your log data, providing accurate and timely analysis.

- **Real-time Monitoring**: Keep a watchful eye on your IT systems with real-time log analysis, allowing you to identify and address issues as they happen.

- **Anomaly Detection**: The system is equipped with sophisticated anomaly detection capabilities, enabling you to proactively respond to irregularities in your logs.

- **Intuitive Visualization**: Complex log data is made comprehensible through intuitive data visualization, making it easier for users to grasp patterns and trends

-  **Predictive Analytics**: Forecast future system behavior based on historical log data, aiding in proactive capacity planning and resource allocation.


# Log Analysis Model To Be Used
## BERTops
Source code for the paper [BERTops: Studying BERT Representations under a
Topological Lens]() accepted at [IJCNN 2022](https://wcci2022.org/call-for-papers/) as an **Oral** Presentation. [Arxiv Link](https://arxiv.org/abs/2205.00953)

## Usage

### Requirements
Provided in [requirements.txt](requirements.txt) file
</br></br>

### Sample usage for SST-2 dataset

To generate the Persistence Diagrams (PDs), run the following sample code
```
python generate_label_pds.py --dataset_name sst-2 --base_model bert --model_card echarlaix/bert-base-uncased-sst2-acc91.1-d37-hybrid
```
Here, the dataset_name, base_model and model_card (from Huggingface community models) can be adjusted for the usage.
</br></br>

To compute the PSF value for generated PDs, run the following sample code
```
python compute_PSF.py --dataset_name sst-2 --base_model bert --model_card echarlaix/bert-base-uncased-sst2-acc91.1-d37-hybrid
```
</br>

To evaluate (compute test accuracy) the model, run the following sample code
```
python evaluate_test.py --dataset_name sst-2 --base_model bert --model_card echarlaix/bert-base-uncased-sst2-acc91.1-d37-hybrid
```
</br>

To perform adversaril attack over the model (example run with Textbugger Black-box), run the following sample code
```
python perform_attack.py --dataset_name sst-2 --base_model bert --model_card echarlaix/bert-base-uncased-sst2-acc91.1-d37-hybrid
```
