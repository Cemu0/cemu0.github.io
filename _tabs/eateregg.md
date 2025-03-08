---
title: ""
---



<p><span id="typed"></span></p>

<script src="/assets/support/libs/scrypt.js" type="text/javascript"></script>
<script src="/assets/support/libs/buffer.js" type="text/javascript"></script>
<script src="/assets/support/libs/setImmediate.js" type="text/javascript"></script>
<script src="/assets/support/libs/aes-js.js" type="text/javascript"></script>
<script src="/assets/support/libs/decrypt.js" type="text/javascript"></script>
<script src="/assets/support/libs/typed.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        //to remove the pass on url, use decryptData(encryptedHex, true);
        function load() {
            var info = decryptData(
                "a7ec7146bf534b6d0f8dc44363336e0952fba3b9bdcd4c072a2ceeab0c97f9e1e22870b0d94ab5e91caa04efeb810be21fe7fa12a112fa2342cd287b0fbd051ab06fb009933d72eafbc054a55dfe9f07ab41679d78d50d2e208273205c29ff63d491f3c294c385f87e88d7fdb629dd9ad619c3fff0a5f77fecb454a9b5dbdc7ce8f5e584cccc7181c1e55c6366193280896ad181c1ec9f2cbbf1936e4dd872a80c977f9b6eeaa200737e6ff2e9042714c715eb79da6bfb6423d4a2f584d933a9044266aab587b750df0cb256daedbcf70872b0540e2460b1e3818c71fb6b4b4e8ab00fac18bcc3c5b2949bb8371acc8c0b7642397547c53c6d310e15ae9b994ceb8981a11a324a7e4f075abc1d8a0b30e12fb6922521c11c2458cfcc0ceacaaadd344356cd8156"
            );

            if (!info.hasOwnProperty("error")) {
                
                var options = {
                    strings: [info],
                    typeSpeed: 20,
                    backSpeed: 25,
                    loop: false
                };
                var typed = new Typed("#typed", options);
            
            }
        }

        setTimeout(function () {
        // this function is heavy so ... the page gonna frozen for a while
            load();
        }, 1000);
    });
</script>

  