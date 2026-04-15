---
title: "Learning-based Optimization of Screw Compressor Rotor Profiles"
subtitle: "A Progressive Neural Surrogate Framework for Simulation-Driven Design"
tag: "Optimization · Surrogate Modeling · SCORG"
summary: "A data-driven closed-loop framework integrating high-fidelity SCORG simulation with progressive neural surrogate modeling for efficient optimization of screw compressor rotor profiles."
---

## 🧠 Learning-based Optimization of Screw Compressor Rotor Profiles

![](/images/Snipaste_2026-04-16_05-35-13.png)

This project focuses on the **data-driven optimization of screw compressor rotor profiles**, aiming to address the high computational cost and low iteration inefficiency in traditional simulation-based design workflows. By integrating **high-fidelity SCORG simulations** with **neural network-based surrogate modeling**, a closed-loop optimization framework is constructed to accelerate design while maintaining physical consistency.

---

### ⚙️ Background & Motivation
In twin-screw compressors, the rotor profile plays a critical role in determining thermodynamic performance, including volumetric efficiency, adiabatic efficiency, and leakage characteristics. Traditional design methods rely on repeated simulation and manual parameter tuning, leading to long development cycles and poor scalability in high-dimensional design spaces.

---

### 🧩 Methodology

#### 1. Parametric Geometry Representation
Rotor profiles are parameterized using structured variables extracted from SCORG configuration files, covering geometry, thermodynamics, and operating conditions.

#### 2. Simulation-driven Data Generation
An automated pipeline is constructed to:
- generate parameter samples  
- run SCORG simulations  
- extract performance metrics (efficiency, flow rate, power, etc.)

A weighted objective function is used:
$R = \sum w_i \, f_i(x)$

#### 3. Progressive Neural Surrogate Modeling
A neural network surrogate is trained to approximate:
$x \rightarrow y$

where:
- x: rotor design parameters  
- y: performance metrics  

The model is iteratively refined through:
- initial random sampling  
- surrogate-guided exploration  
- selective high-fidelity simulation  

This forms a progressive learning loop that improves model accuracy in critical regions.

---

### 🔁 Optimization Strategy
A hybrid optimization approach is adopted:
- Cross-Entropy Method (CEM) for global search  
- surrogate-assisted evaluation for acceleration  

This significantly reduces reliance on expensive simulations.

---

### 🚀 Key Contributions
- Closed-loop simulation–learning framework integrating SCORG and neural models  
- Progressive surrogate training for adaptive accuracy improvement  
- Efficient exploration of high-dimensional design space  
- Significant reduction in optimization time compared to pure simulation-based methods  

---

### 📊 Implementation Highlights
- Automated SCORG execution and result parsing  
- Flexible parameter configuration (param_space.json)  
- PyTorch-based neural surrogate model  
- Robust dataset construction with masking and missing-value handling  
- Multi-objective performance evaluation  

---

### 🔮 Future Work
- Physics-informed surrogate modeling  
- Operator learning for cross-configuration generalization  
- Reinforcement learning-based design optimization  
- Sim-to-real transfer for industrial deployment  

---

### 🏷️ Keywords
Screw Compressor · Rotor Profile · Surrogate Model · Neural Network · Design Optimization · SCORG · Data-driven Engineering