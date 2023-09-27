<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon.ico">
  <link rel="stylesheet" href="../css/signIn.css">
  <title>Sig-Up || Sign-In</title>
</head>

<body>
  <button id="toggle-form-button" onclick="toggleForm()">$~/.Sign-Up ----\></button>
  <script src="../js/signIn.js"></script>
  <a href="../index.php" class="home-button">./Home</a>

  <div class="terminal">
  <form id="login-form" action="../php/signIn.php" method="POST">
  <h2 class="terminal-typing" data-text="./Sign-In   "></h2>
  <label for="login-username">Username:</label>
  <input type="text" id="login-username" name="login-username" required>
  <label for="login-password">Password:</label>
  <input type="password" id="login-password" name="login-password" required>
  <?php if (isset($_GET['error']) && $_GET['error'] == 1): ?>
    <p class="error-message">Incorrect username or password.</p>
  <?php endif; ?>
  <button type="submit">Sign In</button>
</form>

<form id="signup-form" action="../php/signUp.php" method="POST">
  <h2 class="terminal-typing" data-text="./Sign-Up   "></h2>
  <label for="signup-username">Username:</label>
  <input type="text" id="signup-username" name="signup-username" pattern="[a-zA-Z0-9_]{4,}" title="Username must be at least 4 characters long and can only contain alphanumeric characters and underscores." required>
  <label for="signup-password">Password:</label>
  <input type="password" id="signup-password" name="signup-password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number." required>
  <label for="signup-confirm-password">Confirm Password:</label>
  <input type="password" id="signup-confirm-password" name="signup-confirm-password" required>
  <?php if (isset($_GET['error'])): ?>
    <?php if($_GET['error'] == 2): ?>
      <p class="error-message">Passwords do not match.</p>
    <?php elseif($_GET['error'] == 3): ?>
      <p class="error-message">Invalid username format. Username must be at least 4 characters long and can only contain alphanumeric characters and underscores.</p>
    <?php elseif($_GET['error'] == 4): ?>
      <p class="error-message">Invalid password format. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.</p>
    <?php endif; ?>
  <?php endif; ?>
  <button type="submit">Sign Up</button>
</form>
  </div>

</body>

</html>