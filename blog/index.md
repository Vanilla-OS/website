---
tint: true
title: Blog
description: Check out what's happening in Vanilla OS world.
---

<div class="hero hero-heading hero-center">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Blog.</h2>
            <p>Check out what's happening in Vanilla OS world.</p>
        </div>
    </div>
</div>

{% assign posts = site.posts | sort: "date" | sort: "updated" | reverse %}

<section class="blog">
    <div class="container blog-posts">
        {% for post in posts %}
            {% include posts-listing.html post=post %}
        {% endfor %}
    </div>
</section>
