# P3 - Monitoring and Observability Stack with Kubernetes

## Introduction

Welcome to **P3 - Monitoring and Observability Stack**, where we build a robust monitoring and scaling solution for a Kubernetes application. In this project, we deploy a simple **Node.js counter application**, integrate it with **Prometheus** for metrics collection, and visualize these metrics with **Grafana**. Additionally, we set up **Horizontal Pod Autoscaling (HPA)** to ensure our application scales automatically based on its resource usage.

By combining these powerful tools, we get full observability into our application’s health and performance, along with automated scaling to handle varying loads.

## Technologies & Tools

Here’s a quick rundown of the key technologies used in this project:

- **Kubernetes**: The container orchestration platform used to deploy and manage the application.
- **Prometheus**: A leading open-source monitoring and alerting toolkit that collects and stores metrics.
- **Grafana**: A data visualization platform that takes the data from Prometheus and turns it into insightful dashboards.
- **Node.js**: A lightweight JavaScript runtime used to build the counter application that exposes application-level metrics.
- **Docker**: Containers are used to isolate and deploy the application and monitoring tools.
- **Horizontal Pod Autoscaler (HPA)**: Automatically adjusts the number of pods in your deployment based on observed CPU utilization or other metrics.

## What’s Inside

This project demonstrates a full observability setup for your Kubernetes application. Here are the core components:

### 1. **Node.js Application (Counter App)**

At the heart of this project is a simple **Node.js counter application**. The application exposes a `/metrics` endpoint, providing essential performance metrics, including the total number of increments.

### 2. **Prometheus** - Metrics Collection

Prometheus is configured to scrape metrics from the Node.js application. It runs within the Kubernetes cluster, collecting data and making it available for querying. Prometheus is set up with the following:

- **Scrape configuration**: Prometheus is configured to scrape the `/metrics` endpoint exposed by the Node.js app.
- **Service discovery**: Prometheus automatically detects services within the cluster and collects their metrics.

### 3. **Grafana** - Metrics Visualization

Grafana takes the metrics from Prometheus and displays them in beautiful, interactive dashboards. The visualizations allow us to track performance metrics like CPU usage, memory usage, and request rates. With Grafana, we get an easy-to-understand, real-time view of the application’s health.

### 4. **Horizontal Pod Autoscaler (HPA)** - Auto-Scaling

To ensure our application can handle varying loads, we set up a **Horizontal Pod Autoscaler**. The HPA automatically scales the number of pods in the deployment based on CPU utilization, ensuring the application has enough resources during peak usage.
