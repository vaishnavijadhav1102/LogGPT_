# LogGPT
Welcome to the LogGPT! This repository houses an innovative system that harnesses the power of advanced technologies, including Large Language Models, to analyze log data from IT systems. With this project, you can gain valuable insights, detect anomalies, and enhance the management of your IT infrastructure. Our objective is to make this system centralized.

## Features

-**Centralization of servers**: LogGPT centralizes data from different locations using LogStash and stores it in Elastic search
- **Advanced Machine Learning**: Our system leverages state-of-the-art machine learning algorithms to make sense of your log data, providing accurate and timely analysis.

- **Real-time Monitoring**: Keep a watchful eye on your IT systems with real-time log analysis, allowing you to identify and address issues as they happen.

- **Anomaly Detection**: The system is equipped with sophisticated anomaly detection capabilities, enabling you to proactively respond to irregularities in your logs.

- **Intuitive Visualization**: Complex log data is made comprehensible through intuitive data visualization, making it easier for users to grasp patterns and trends

-  **Predictive Analytics**: Forecast future system behavior based on historical log data, aiding in proactive capacity planning and resource allocation.

# Centralized System to collect log data

Note: This is a mock idea. We plan on implementing OpenSearch insead of Elastic Search and FluentD instead of Logstash. Both of them being open source which will ensure security.

 ![image](https://github.com/vaishnavijadhav1102/SIH_LogGPT/assets/96016512/d65eed9a-9944-4e51-85d3-11e5d1b9f88b)

Logstash: Logstash is an open-source data processing pipeline that collects, enriches, and transforms data from multiple sources and stores it in a centralized repository. It is especially handy for dealing with log and event data.
Elastic Search: Elasticsearch is a popular tool for storing and indexing enormous amounts of data, making it simple to search, analyze, and visualize this data.

![image](https://github.com/vaishnavijadhav1102/SIH_LogGPT/assets/96016512/9d7c3dbb-9505-46d0-938f-9f7d889b0739)

Steps to Store Log Data in Elasticsearch:
1. Install and configure Logstash and Elastic Search and start the Elastic Search.
2. Configure Logstash to send the processed data to Elasticsearch. Specify the Elasticsearch cluster's address and other relevant settings in the Logstash configuration.
3. In Elasticsearch, define an index where the log data will be stored.
4. Once the data is indexed in Elasticsearch, you can use Elasticsearch's powerful search and analytics capabilities to query your log data.
 ![image](https://github.com/vaishnavijadhav1102/SIH_LogGPT/assets/96016512/edaf8952-4bd8-4a9b-8a5d-36fa63215002)

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
