---
title: "Learning-based Perspective Distortion Compensation for Industrial Vision Measurement"
subtitle: "A Geometry-Constrained Inverse Mapping Framework for Accurate Dimension Recovery"
tag: "Computer Vision · Geometric Reconstruction · Error Compensation"
summary: "A geometry-constrained learning framework that recovers real-world dimensions from perspective-distorted visual observations by combining planar reconstruction, perspective normalization, and neural inverse mapping for robust industrial measurement."
---
# 📐 Projection-to-Geometry Learning for Industrial Vision Measurement

## Overview

This project focuses on **recovering real-world geometric dimensions from monocular visual observations under perspective distortion**.  
It aims to bridge the gap between **projective geometry** and **true physical measurements**, enabling accurate and robust dimension estimation using low-cost vision sensors.

---

## 🔍 Problem Statement

In industrial scenarios, objects captured by cameras suffer from:

- Perspective distortion (foreshortening effect)
- View-dependent geometric deformation
- Nonlinear mapping between image features and real dimensions

Traditional methods based on explicit geometric modeling are often:

- Sensitive to camera pose
- Difficult to generalize across setups
- Limited under real-world noise and depth uncertainty

---

## ⚙️ Method

We propose a **geometry-constrained learning framework** that integrates classical vision geometry with data-driven regression:

### 1. Planar Reconstruction

![](/images/256dd52f61981482223e1143f28077bf.png)

- Extract reference plane using **RANSAC**
- Establish a normalized plane coordinate system
- Reduce 3D problem to structured 2D geometry

### 2. Perspective Normalization

- Apply homography-based transformation
- Align image observations to a canonical top-down view

### 3. Feature Extraction

![](/images/8706b848356c5edfffde80ec2044a193.png)

- Use object detection (e.g., YOLO) to obtain:
  - Projected position
  - Projected orientation (yaw)
  - Projected size (length & width)

### 4. Learning-based Inverse Mapping

![](/images/847f68dd34001e20a38aed64b572359d.png)

We learn a nonlinear mapping:


$\text{Projected Geometry} \rightarrow \text{Real Geometry}$


- Input: projected geometric features
- Output: true physical dimensions and pose
- Model: lightweight regression network (e.g., ResMLP)

---

## 🧠 Key Insight

Instead of explicitly modeling the full projection pipeline,  
we treat the problem as an **inverse geometry learning task**, where:

- Geometry provides structural constraints
- Learning handles nonlinear residual errors

This significantly improves robustness under real-world conditions.

---

## 📊 Results

- Achieved **millimeter-level accuracy (~2 mm error)**
- Strong generalization across varying camera poses
- Stable performance under noise and partial observation

---

## 🚀 Contributions

- A unified pipeline combining:
  - Planar geometry reconstruction
  - Perspective normalization
  - Learning-based error compensation
- A data-driven alternative to traditional calibration-heavy methods
- Demonstration of **geometry + learning hybrid paradigm** for measurement tasks

---

## 📌 Keywords

`Computer Vision` · `Geometric Reconstruction` · `Error Compensation` · `Industrial Measurement` · `Learning-based Inverse Mapping`
