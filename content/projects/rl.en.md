---
title: "Multimodal Reinforcement Learning"
subtitle: "Reinforcement Learning & Embodied Intelligence"
tag: "Autonomous Driving · Humanoid Robotics · Legged Systems"
summary: "Projects focusing on reinforcement learning-based control, multi-agent interaction, and physically grounded intelligent systems."
---

# Selected Projects

## 🚗 Autonomous Driving with Reinforcement Learning

![](/images/Snipaste_2026-04-16_06-19-59.png)

**Keywords:** PPO · CARLA · Multi-Agent Learning · Distributed Training  

This project focuses on developing a reinforcement learning-based autonomous driving framework in high-fidelity simulation environments.

- Built on the CARLA simulator to model realistic urban driving scenarios  
- Designed a multi-modal observation space combining visual input, vehicle state, and route information  
- Implemented Proximal Policy Optimization (PPO) for policy learning  
- Introduced multi-agent adversarial training to improve robustness in dynamic traffic environments  
- Integrated distributed sampling and training using Ray RLlib to accelerate convergence  

**Highlights**

- Improved training efficiency through parallelized experience collection  
- Enhanced policy robustness under complex multi-vehicle interactions  
- Designed physically-informed reward functions for stability and controllability  

---

## 🤖 Humanoid Robot Locomotion with Tactile Feedback

**Keywords:** Reinforcement Learning · Tactile Sensing · Gait Optimization · Sim-to-Real  

This project explores reinforcement learning for humanoid locomotion with explicit modeling of physical contact feedback.

- Developed a learning framework incorporating foot pressure distribution from tactile sensors (e-skin)  
- Designed reward functions based on contact stability and force distribution  
- Modeled the relationship between physical interaction and control policy optimization  
- Investigated sim-to-real transfer by embedding physically meaningful feedback signals  

**Highlights**

- Improved locomotion stability through contact-aware learning  
- Bridged the gap between simulation and real-world dynamics  
- Emphasized physically grounded policy learning rather than purely data-driven strategies  

---

## 🦿 Wheel-Legged Robot Control (Course Project)

![](/images/Snipaste_2026-04-16_06-19-10.png)

**Keywords:** Hybrid Locomotion · Dynamics Modeling · Control System Design  

This course project focuses on the modeling and control of a wheel-legged robotic system.

- Built a dynamic model of a wheel-legged robot considering coupled motion constraints  
- Designed control strategies for stable locomotion under hybrid motion modes  
- Implemented trajectory tracking and posture stabilization  
- Analyzed system behavior under different motion conditions  

**Highlights**

- Developed understanding of hybrid locomotion systems  
- Combined classical control with system modeling  
- Strengthened intuition on physical constraints in robotic systems  

---

## 💡 Research Direction

My current research interest lies in:

- Reinforcement learning for control optimization  
- Physically grounded learning systems  
- Sim-to-real transfer in embodied intelligence  
- Multi-agent interaction and adaptive optimization  

I aim to develop intelligent systems that integrate **perception, decision-making, and physical consistency**, enabling robust performance in real-world environments.