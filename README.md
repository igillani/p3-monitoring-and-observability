# P3 - Monitoring and Observability Stack with Kubernetes

## Overview

**P3 - Monitoring and Observability Stack** is a comprehensive project that demonstrates how to integrate monitoring, visualization, and scaling for a Kubernetes-based application. The goal of this project is to ensure that the Node.js **Counter Application** runs efficiently, is well-monitored, and scales automatically based on demand.

In this project, we’ve accomplished the following:

### 1. **Node.js Application (Counter App)**
We started with a simple **Node.js counter application** that exposes a `/metrics` endpoint. This application tracks the number of times a counter is incremented and exposes this information as Prometheus-compatible metrics. This served as the foundation of our monitoring stack.

### 2. **Prometheus - Metrics Collection**
We deployed **Prometheus**, a leading open-source monitoring tool, to collect metrics from the **Node.js application**. Prometheus was configured to scrape the `/metrics` endpoint of the application at regular intervals and store the collected data for further analysis.

Key configurations included:
- **Prometheus Scraping**: We configured Prometheus to scrape the exposed metrics endpoint of the Node.js app.
- **Service Discovery**: Prometheus automatically detected services running within the Kubernetes cluster to collect relevant metrics.

### 3. **Grafana - Metrics Visualization**
With **Grafana**, we created a visual dashboard to display the metrics collected by Prometheus. Grafana transformed the raw metrics into interactive and intuitive visualizations. The visualizations included metrics such as CPU usage, memory usage, and request counts.

Grafana provided a powerful user interface for tracking the health and performance of our application in real-time, allowing for better insights and decision-making.

### 4. **Horizontal Pod Autoscaling (HPA)**
To ensure that the application could handle varying traffic loads, we implemented **Horizontal Pod Autoscaling** (HPA). Based on CPU utilization, the HPA automatically adjusts the number of replicas of the **Node.js application** running in the Kubernetes cluster.

With HPA in place, the application could scale up when demand increased and scale down when the load decreased, ensuring optimal resource usage.

### 5. **Enhancing Kubernetes Deployment**
We optimized the **Kubernetes deployment** by:
- **Resource Requests and Limits**: We set resource requests and limits for the application’s containers to ensure they get the right amount of resources and avoid overloading the nodes.
- **Probes**: We added **liveness** and **readiness probes** to ensure that the application is running correctly and only sends traffic to healthy pods.
- **Affinity and Anti-Affinity**: We applied node affinity to control which nodes the application pods would be scheduled on, ensuring better resource utilization and availability.

### 6. **Challenges Resolved**
- **Metrics Server Issues**: We encountered an issue with the **metrics server** not being able to fetch node metrics due to certificate validation errors. We resolved this by properly configuring the metrics server and troubleshooting certificate issues.

## Features
- **Prometheus** collects and stores metrics in real-time.
- **Grafana** visualizes those metrics through interactive and customizable dashboards.
- **Horizontal Pod Autoscaler (HPA)** automatically adjusts the application’s replicas based on CPU usage.
- **Kubernetes Deployment Optimization** includes resource requests, limits, health checks, and affinity settings for better performance and resilience.

## Future Work
- **Alerting**: Implement alerts based on specific metrics thresholds to proactively monitor the system’s health.
- **Logging**: Integrate a logging system like **ELK** or **Loki** for centralized logging and easier debugging.
- **Service Mesh**: Implement **Istio** or another service mesh for enhanced monitoring, tracing, and management of microservices.

## Conclusion
This project demonstrates how to build a **Monitoring and Observability Stack** for Kubernetes-based applications. It leverages **Prometheus** for metrics collection, **Grafana** for visualization, and **Horizontal Pod Autoscaling** to ensure that the application scales automatically based on demand. By adding resource optimizations and leveraging Kubernetes’ native capabilities, we built a highly available, resilient, and well-monitored application.

---

Feel free to explore and expand on this project to further enhance its capabilities and add more features!

## License

This project is licensed under the MIT License.
