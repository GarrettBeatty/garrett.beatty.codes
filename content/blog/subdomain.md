---
title: "Creating a subdomain for a blog using Google Domains"
date: 2019-05-01T19:39:42-04:00
draft: false
---

Suppose you have the domain *mydomain.com*, and you also have your blog running at *mydomain.com/blog*. 
What if you want to have your blog url be *blog.mydomain.com* instead of *mydomain.com/blog*? One way to 
solve this problem is using a synthetic record in Google Domains.

Here is my setup below for *blog.gbt.codes*

![Google Domain](/img/domain.png "Domains Setup")

This makes *blog.gbt.codes* forward to *gbt.codes/blog*. The path forwarding option makes it so that
a url such as *blog.gbt.codes/myarticle* forwards to *gbt.codes/blog/myarticle*.
