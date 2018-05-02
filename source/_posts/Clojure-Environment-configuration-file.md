---
title: Clojure Environment configuration file
date: 2018-04-30 22:06:49
categories: PROGRAMMING
tags:
  - clojure
  - programming language
---

## 前言

Leiningen project.clj

<!--more-->


```clojure
(defproject org.quantmatrix/prophet "1.0.0-SNAPSHOT"
  :description "Machine learning automatic quantitative trading system"
  :url "https://prophet.quantmatrix.org"
  :license {:name "Apache License, Version 2.0"
            :url  "https://www.apache.org/licenses/LICENSE-2.0.html"}
  :dependencies [
                 [org.clojure/clojure "1.9.0"]
                 ]
  :source-paths ["src/main/clojure"]
  :java-source-paths ["src/main/java"]
  :resource-paths ["src/main/resource"]
  :test-paths ["src/test/clojure"]
  :main ^:skip-aot org.quantmatrix.prophet.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
```
