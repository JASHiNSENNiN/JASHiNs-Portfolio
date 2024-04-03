<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/navbar.css">
    <link rel="stylesheet" href="./css/welcome_text.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon.ico">
    <title>>./Portfolio</title>
</head>

<body>
    <nav class="terminal-navbar">
        <ul>
            <li><a href="#home">$ Home</a></li>
            <li><a href="#aboutme">$ About-Me</a></li>
            <li><a href="#contact">$ Contacts</a></li>
        </ul>
    </nav>

    <script src="./js/navbar.js"></script>

    <div id="home">
        <div class='console-container'><span id='text'></span>
            <div class='console-underscore' id='console'>&#95;</div>
        </div>
        <script src="./js/welcome_text.js"></script>
        <div id="welcome_screen">
            <p>Full Stack Web Developer | Game Developer</p>
        </div>
    </div>

    <?php
    $terminalPrompt = "jashin@jpcs ~$   ";
    $additionalMessage = "Name: Josh V. Cinense<br>Age: 20<br><br>Creates things with the power of creativity and efficiency";
    ?>

    <div id="terminal0" class="terminal" text="<?php echo isset($_SESSION['username']) ? 'Greet -Guest' : 'whoami'; ?>" additional-message="<?php echo $additionalMessage; ?>"><?php echo $terminalPrompt; ?></div>
    <script src="./js/terminal.js"></script>

    <div id="aboutme" class="aboutme">
        <h2>
            # /About Me -----------------
        </h2>
        <div class="terminal-content">
            <p>Hello! I'm Josh. I have a diverse range of tech skills that allow me to tackle various challenges in the
                world of software development. From Java and Python to C# and HTML/CSS, I possess a solid foundation in
                web development. My expertise extends to game development and design, Linux UX designing, graphic
                design, and multimedia production. I am well-versed in object-oriented design and programming, and I
                have experience with 3D modeling and animation software.</p>
            <p>In addition to my technical skills, I am also experienced in cryptography, web design and development,
                technical writing, and documentation. I thrive on challenges and enjoy finding creative solutions to
                complex problems.</p>
            <p>My soft skills, including adaptability, critical thinking, creativity, communication, leadership,
                decision-making, flexibility, confidence, problem-solving, and project management, enable me to work
                effectively in teams and deliver successful results.</p>
        </div>
        <h3>For more information, you can check the link/file below.</h3>

        <button class="button" onclick="downloadResume()">./Download</button>
        <button class="button" onclick="openResume()">./Check-Resume</button>
        <script src="./js/resumeButton.js"></script>
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