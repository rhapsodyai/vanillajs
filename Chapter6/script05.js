<!DOCTYPE html>
<html>
<head>
  <title>Car Picker</title>
  <link rel="stylesheet" href="script03.css">
  <script src="script06.js"></script>
</head>
<body>
<h2 class="centered">Car Picker</h2>
<form action="someAction.cgi">
  <p><label for="emailAddr">Email Address:<input id="emailAddr" type="text" size="30" class="reqd email"></label></p>
  <p>Colors:
    <select id="color" class="reqd">
      <option value="" selected>Choose a color</option>
      <option value="Red">Red</option>
      <option value="Green">Green</option>
      <option value="Blue">Blue</option>
    </select>
  </p>
  <p>Options:
    <label for="sunroof"><input type="checkbox" id="sunroof" value="Yes">Sunroof (Two door only)</label>
    <label for="pWindows"><input type="checkbox" id="pWindows" value="Yes">Power Windows</label>
  </p>
  <p>Doors:&nbsp;&nbsp;
    <label for="twoDoor"><input type="radio" id="twoDoor" name="DoorCt" value="twoDoor" class="radio">Two</label>
    <label for="fourDoor"><input type="radio" id="fourDoor" name="DoorCt" value="fourDoor" class="radio">Four</label>
  </p>
  <p>
    <label for="zip">Enter your Zip code or pick the dealer nearest you:<br>
      Zip: <inoput id="zip" type="text" size="5" maxlength="5" class="isZip dealerList">
    </label>
    <select id="dealerList" size="4" class="zip">
      <option value="California--Lemon Grove">California--Lemon Grove</option>
      <option value="California--Lomita">California--Lomita</option>
      <option value="California--Long Beach">California--Long Beach</option>
      <option value="California--Los Alamitos">California--Los Alamitos</option>
      <option value="California--Los Angeles">California--Los Angeles</option>
    </select>
  </p>
  <p><input type="submit" value="Submit">&nbsp;<input type="reset"></p>
</form>
</body>
</html>
