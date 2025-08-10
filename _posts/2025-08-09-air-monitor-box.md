---
title: DIY Air monitor box. 
date: 2025-08-09 09:00:00 +0000
categories: [AirMonitor]
tags: [3D print, DIY]
pin: false
image: "../assets/img/air_monitor/Screenshot%202025-08-10%20at%2009.46.41.png"
---
While working in the office, many of my friends realised that we got headaches in the morning. After some investigation, I suspect that the room has too much CO2, which causes headaches for people. So around January 2025, I decided to make a cheap air monitor to confirm this theory, because available, real and reliable products on the market were simply too expensive for me to purchase at that time.

After a week, the sensor arrived, I combined it with an ESP8266 board that has an OLED screen, some other cheap sensors, and put it all on a testboard. Then I quickly designed a 3D print box for this project and put it to the test. When using ESP devices to skip all the bugs related to wifi, MQTT, and also installing the library, I always use the ESPHome platform because it is so reliable and fast for anyone to prototype an IOT project. 

The next day, I put the box to the test, in a tight room with 75m3 of air, with two people and my colleague, only took a morning from 9 am to 12 pm, the CO2 level rose from 500ppm to 1000ppm, and some sensitive person will see the different in the air and theoretucally stay at 1000ppm CO2 air could lead to the reduction of cognitive performance. And after turning on the air ventilation fan and opening the room door for 5 minutes, the CO2 level lowers to normal. 

I also tested with a room of the same volume, but with 5 people. This only took 4 hours to reach 2000ppm of CO2, an even more serious harm than before. 

Several months after that, my friend talked to me in a coffee shop about how he had a headache after sleeping. I ask several questions and show him that it could be due to his room's lack of air ventilation, and let him borrow my "Phong Thuỷ" box, which is just this project. After one night, the CO2 in his room reached over 1000ppm, and during the day, if he didn't open the door, the level could reach 2000ppm. So he adjusted the frequency of the door opening for air ventilation. His headache problem went away.

This gave me a dream of making a commercial version for others so they can monitor their room. Also, it could be more convenient to have a dashboard to track the history and predict the trend too, and also more reliable to put all into a single PCB, and maybe equipped with a battery to allow running off-grid. Check if the CO2 level is safe in AC rooms, etc., but by now, the project is just too expensive to do. Let's see if I can afford this shortly. In the meantime, you can check for the project description [here](https://github.com/Cemu0/airmonitor).