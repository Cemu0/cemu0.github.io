---
title: "A little love"
date: 2025-03-08 10:00:00 +0000
categories: []
tags: []
pin: false
hidden: true
published: true
---

<script src="/assets/support/libs/typed.js"></script>

<p><span id="typed"></span></p>

<script src="/assets/support/libs/scrypt.js" type="text/javascript"></script>
<script src="/assets/support/libs/buffer.js" type="text/javascript"></script>
<script src="/assets/support/libs/setImmediate.js" type="text/javascript"></script>
<script src="/assets/support/libs/aes-js.js" type="text/javascript"></script>
<script src="/assets/support/libs/decrypt.js" type="text/javascript"></script>


<script>
    document.addEventListener('DOMContentLoaded', function() {
        //to remove the pass on url, use decryptData(encryptedHex, true);
        async function load() {
        info = await decryptData(
            "b9b97e3d53c3157ffc718d2780f06e41b434adfdf88c4cacb92ba9ad0e7127679f05f82b3042b5f3be39030c338042b6bf8d249b3af050a959853aef9576c4cf568c64b31f30d96aec64debe156cc41c62416d1b01d21a22632abb8d8f67f62b56e8e0d894c90c8469c695b53cfab140df5e8dfbf0b7e07fea1f2674b5dbd5e473346a5843c33a620d5fc6688569ce63542bd162057804edb2bcc622fa10f0335726c8408d330fc22633e0211105270c544fe187da7cfb463837a4f58a50698bd9426123cd82b8179c143b0ced20f5b4a402cd4dcff4ab11779b839231608a30b83895c1f05a17c5b28699b8371a6a594835671237904c3d8eef8c803fbbd750a38497a10f324b504c40021acac953f11aeab0923eb95bd7e5802a43d047c1e79c29cacc4a921445e3f88821bda263ec1466e884"
        );

        if (!info.hasOwnProperty("error")) {
            loaded = true;
            
            var options = {
                strings: [info],
                typeSpeed: 90,
                backSpeed: 25,
                loop: false
            };
            var typed = new Typed("#typed", options);
        
        }
        }

        load();
        
    });
</script>

  