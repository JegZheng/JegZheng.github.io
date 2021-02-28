---
title: "Degeneration in VAE: in the Light of Fisher Information Loss"
collection: publications
permalink: /publication/2018-05-08-paper-degeneration
excerpt: '**Huangjie Zheng**, Jiangchao Yao, Ya Zhang and Ivor W. Tsang'
date: 2018-01-31
venue: 'arXiv preprint, 2018'
paperurl: 'https://arxiv.org/abs/1802.06677'
bibtex: 'https://JegZheng.github.io/bibtex/VAE_degeneration.html'
citation: 'Zheng, H., Yao, J., Zhang, Y., & Tsang, I. W. (2018). Degeneration in VAE: in the Light of Fisher Information Loss. arXiv preprint arXiv:1802.06677.'
---
While enormous progress has been made to Variational Autoencoder (VAE) in recent years, similar to other deep networks, VAE with deep networks suffers from the problem of degeneration, which seriously weakens the correlation between the input and the corresponding latent codes, deviating from the goal of the representation learning. To investigate how degeneration affects VAE from a theoretical perspective, we illustrate the information transmission in VAE and analyze the intermediate layers of the encoders/decoders. Specifically, we propose a Fisher Information measure for the layer-wise analysis. With such measure, we demonstrate that information loss is ineluctable in feed-forward networks and causes the degeneration in VAE. We show that skip connections in VAE enable the preservation of information without changing the model architecture. We call this class of VAE equipped with skip connections as SCVAE and perform a range of experiments to show its advantages in information preservation and degeneration mitigation.

\[ [arxiv](https://arxiv.org/abs/1802.06677) \]
