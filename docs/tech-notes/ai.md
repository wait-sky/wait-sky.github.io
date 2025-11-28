# AI 笔记

## 机器学习基础

### 监督学习

- **分类问题**：目标变量是离散值
- **回归问题**：目标变量是连续值
- **评估指标**：准确率、精确率、召回率、F1 值、RMSE、MAE

### 无监督学习

- **聚类算法**：K-means、层次聚类、DBSCAN
- **降维算法**：PCA、t-SNE、LDA
- **关联规则**：Apriori 算法、FP-Growth 算法

## 深度学习

### 神经网络基础

- **感知机**：最简单的神经网络
- **激活函数**：ReLU、Sigmoid、Tanh、Softmax
- **损失函数**：MSE、Cross-Entropy、Hinge Loss
- **优化器**：SGD、Adam、RMSprop、Adagrad

### CNN 基础

- **卷积层**：提取局部特征
- **池化层**：降低维度，减少计算量
- **全连接层**：分类或回归
- **常用架构**：LeNet-5、AlexNet、VGG、ResNet

### Transformer 架构

- **Self-Attention 机制**：捕获序列中的依赖关系
- **Multi-Head Attention**：并行计算多个注意力头
- **Positional Encoding**：为序列添加位置信息
- **Feed-Forward Network**：非线性变换

## 自然语言处理

### 文本预处理

- **分词**：将文本分割为词语或子词
- **词嵌入**：Word2Vec、GloVe、FastText
- **预训练模型**：BERT、GPT、LLaMA、ChatGLM

### 文本生成

- **自回归模型**：GPT 系列
- **自编码模型**：BERT 系列
- **生成式对抗网络**：GAN
- **变分自编码器**：VAE

## AI 工具使用

### TensorFlow 技巧

- 使用 tf.data API 高效处理数据
- 使用 tf.function 加速模型训练
- 使用 TensorBoard 可视化训练过程
- 使用 SavedModel 格式保存模型

### PyTorch 技巧

- 使用 DataLoader 批量加载数据
- 使用 nn.Module 构建模型
- 使用 autograd 自动求导
- 使用 torchscript 部署模型

## 模型部署

### 部署方式

- **服务器部署**：使用 Flask 或 FastAPI 构建 API
- **容器化部署**：使用 Docker 容器
- **Serverless 部署**：使用 AWS Lambda 或阿里云函数计算
- **移动端部署**：使用 TensorFlow Lite 或 PyTorch Mobile

### 模型优化

- **模型压缩**：剪枝、量化、知识蒸馏
- **推理加速**：使用 ONNX Runtime 或 TensorRT
- **内存优化**：减少模型内存占用
