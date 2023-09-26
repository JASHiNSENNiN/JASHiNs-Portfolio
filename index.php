<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link  rel="stylesheet" href="./css/navbar.css">
        <link rel="stylesheet" href="./css/welcome_text.css">
        <link rel="stylesheet" href="./css/style.css">
        <script src="https://kit.fontawesome.com/yourcode.js"></script>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon.ico">
        <title>Document</title>
    </head>
    <body>
        <nav class="terminal-navbar">
            <ul>
                <li><a href="#home">$ Home</a></li>
                <li><a href="#aboutme">$ About-Me</a></li>
                <li><a href="#schedule">$ Schedule</a></li>
                <li><a href="#contact">$ Contacts</a></li>
            </ul>
        </nav>
        <nav class="button-navbar">
            <button id="sign-in-button" class="nav-button" onclick="toggleTransparentBox()">./Sign-In</button>
        </nav>

        <script ... src="./js/navbar.js"></script>

        <div id="home">
            <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
            <script src="./js/welcome_text.js"></script>
            <div id= "welcome_screen">
                <p>Full Stack Web Developer | Game Developer</p>
            </div>
        </div>

        <div id="terminal0" class="terminal">jashin@jpcs ~$ </div>
        <script src="./js/terminal.js"></script>

        <div id="aboutme" class="aboutme">
            <h2>
                # /About Me -----------------
            </h2>
            <div class="terminal-content">
                <p>Hello! I'm Josh. I have a diverse range of tech skills that allow me to tackle various challenges in the world of software development. From Java and Python to C# and HTML/CSS, I possess a solid foundation in web development. My expertise extends to game development and design, Linux UX designing, graphic design, and multimedia production. I am well-versed in object-oriented design and programming, and I have experience with 3D modeling and animation software.</p>
                <p>In addition to my technical skills, I am also experienced in cryptography, web design and development, technical writing, and documentation. I thrive on challenges and enjoy finding creative solutions to complex problems.</p>
                <p>My soft skills, including adaptability, critical thinking, creativity, communication, leadership, decision-making, flexibility, confidence, problem-solving, and project management, enable me to work effectively in teams and deliver successful results.</p>
            </div>
            <h3>For more information, you can check the link/file below.</h3>

            <button class="button" onclick="downloadResume()">./Download</button>
            <button class="button" onclick="openResume()">./Check-Resume</button>
            <script src="./js/resumeButton.js"></script>
        </div>


        <div id="schedule">
            <h2>
                # /Schedule -----------------
            </h2>
            <table class="schedule">
                <thead>
                    <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7:30 - 8:30</td>
                        <td rowspan="3">NET102<br>7:30-10:30 AM<br>Mr. V. Figueroa<br>(RM 204)</td>
                        <td rowspan="5"></td>
                        <td></td>
                        <td></td>
                        <td rowspan="2">WS101<br>07:30-09:30 AM<br>Mr. V. Figueroa<br>(ComLab)</td>
                    </tr>
                    <tr>
                        <td>8:31 - 9:30</td>
                        <td rowspan="2">GE11<br>09:00-10:30 AM<br>Mr. V. Balintag<br>(RM204)</td>
                        <td rowspan="2">GE11<br>09:00-10:30 AM<br>Mr. V. Balintag<br>(RM204)</td>
                    </tr>
                    <tr>
                        <td>9:31 - 10:30</td>
                        <td rowspan="2">IAS101<br>09:30-11:30 AM<br>Mr. V. Figueroa<br>(ComLab)</td>
                    </tr>
                    <tr>
                        <td>10:30 - 11:30</td>
                        <td rowspan="2">SIA101<br>10:30-12:00 AM<br>Mr. V. Figueroa<br>(RM204)</td>
                        <td rowspan="2">SIA101<br>10:30-12:00 AM<br>Mr. V. Figueroa<br>(RM204)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>11:31 - 12:30</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>12:30 - 1:30</td>
                        <td colspan="5" class="lunch-break">LUNCH BREAK</td>
                    </tr>
                    <tr>
                        <td>1:30 - 2:30</td>
                        <td rowspan="3">IPT102<br>1:30-4:30 PM<br>Mr. V. Figueroa<br>(RM204)</td>
                        <td rowspan="5"></td>
                        <td rowspan="2">SPT1<br>1:30-3:00 PM<br>Ms. J. Domingo<br>(ComLab)</td>
                        <td rowspan="2">PF301<br>1:30-3:30 PM<br>Mr. E. Villanueva<br>(ComLab)</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td>2:30 - 3:30</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3:31 - 4:30</td>
                        <td>SPT2<br>3:00-4:30 PM<br>Ms. J. Domingo<br>(ComLab)</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="contact">
            <h2>
                # /Contacts -----------------
            </h2>
            <div class=".contact-terminal">
                <h3>
                    Did I pique your interest?
                </h3>
                <button class="button" onclick="openFbProfile()">./Lets-Be-Friends</button>
                <script src="./js/letsBeFriends.js"></script>
                <p class="links">
                    Facebook: <a href="https://www.facebook.com/profile.php?id=100084192554900" target="_blank" class="link">Josh V. Cinense</a><br>
                    Discord: <a href="https://discord.gg/8HDchGDsx8" target="_blank" class="link">JPCS-OLSHCO-HUB</a><br>
                    GitHub: <a href="https://github.com/JASHiNSENNiN" target="_blank" class="link">JASHiNSENNiN</a><br>
                    Email: <a href="mailto:jacercinense@gmail.com" class="link">jacercinense+portfolio@gmail.com</a>
                </p>
            </div>
        </div>
        <footer class="footer">
            <p>&copy; 2023 Josh V. Cinense. All rights reserved.</p>
            <p class="license">This website is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>. You can view the source code <a href="https://github.com/JASHiNSENNiN/JASHiNs-Portfolio" target="_blank">here</a>.</p>
        </footer>
    </body>
</html>
