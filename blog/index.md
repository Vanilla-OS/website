---
title: Blog
description: Check out what's happening in Vanilla OS world.
---

<div class="hero hero-center">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Blog.</h2>
            <p>Check out what's happening in Vanilla OS world.</p>
        </div>
    </div>
</div>

{% assign posts = site.posts | sort: "date" | sort: "updated" | reverse %}

<section class="page blog">
    <div class="container medium">
        {% for post in posts %}
            {% include posts-listing.html post=post %}
        {% endfor %}
    </div>
</section>
