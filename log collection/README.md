Centralized System to collect log data

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

Benefits of Storing Log Files in Elasticsearch:
Centralized Log Management: Storing log files in Elasticsearch provides a centralized repository for all your log data, making it easier to manage and analyze.
Real-time Search: Elasticsearch offers real-time search capabilities, allowing you to quickly search for specific log events.
Security and Access Control: Elasticsearch provides robust security features, including role-based access control and encryption, to ensure that your log data is protected.

