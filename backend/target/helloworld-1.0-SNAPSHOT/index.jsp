<!DOCTYPE html>
<!-- [START_EXCLUDE] -->
<%--
  ~ Copyright 2017 Google Inc.
  ~
  ~ Licensed under the Apache License, Version 2.0 (the "License"); you
  ~ may not use this file except in compliance with the License. You may
  ~ obtain a copy of the License at
  ~
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  ~ implied. See the License for the specific language governing
  ~ permissions and limitations under the License.
  --%>
<!-- [END_EXCLUDE] -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.example.appengine.java8.HelloAppEngine" %>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Demonstration of 2048 Game">
    <meta name="keywords" content="HTML,CSS,JavaScript">

    <title>2048</title>
	<link rel="icon" type="image/png" sizes="16x16" href="frontend/favicon-16x16.png">
    <link href="frontend/2048.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <!--Div Elements-->
    <div class="heading" width="40%">
        <h1 class="title">2048 </h1>
    </div>
    <p>Join the numbers and get to the <strong>2048 tile!</strong></p>

    <div id="scores-container"></div>

    <div id="grid-container" align-content="center"></div>

	<div id="legend"></div>

    <p>
        <strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong>
    </p>

    <div id="highscore-container"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!--JSON file-->
    <script type="text/javascript" src="frontend/dummy_highscores.json"></script>

    <!--Game Functions-->
    <script src="frontend/highscoreDisplay.js"></script>
    <script src="frontend/cellColor.js"></script>
	<script src="frontend/gridDataInitializer.js"></script>
	<script src="frontend/gameOverChecker.js"></script>
	<script src="frontend/cell.js"></script>
	<script src="frontend/newCellComputer.js"></script>
	<script src="frontend/segment.js"></script>
    <script src="frontend/gridDataDisplay.js"></script>
    <script src="frontend/scoreBoardDisplay.js"></script>
    <script src="frontend/newScoreComputer.js"></script>
    <script src="frontend/nextGridComputer.js"></script>
	<script src="frontend/direction.js"></script>
    <script src="frontend/gridData.js"></script>
	<script src="frontend/inputHandler.js"></script>
    <script src="frontend/legendDisplay.js"></script>
    <script src="frontend/game.js"></script>

    <!--Unit Tests-->
    <script src="frontend/test.js"></script>
    <script src="frontend/nextGridComputer_test.js"></script>
    <script src="frontend/gridData_test.js"></script>
    <script src="frontend/gridDataDisplay_test.js"></script>
	<script src="frontend/segment_test.js"></script>
	<script src="frontend/newCellComputer_test.js"></script>
	<script src="frontend/gameOverChecker_test.js"></script>

    <!--Main Function-->
    <script src="frontend/2048.js"></script>

</body>
</html>
