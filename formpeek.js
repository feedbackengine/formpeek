<script type="text/javascript">
var to;
function pushIt(formInput) {
	clearTimeout(to);
	to = setTimeout(function() {
		var formText = encodeURIComponent(formInput);
		var xhttp = new XMLHttpRequest();
		url = "YOUR_FULL_URL_GOES_HERE" + formText; // example: "https://www.example.com/yourscript?input="
		xhttp.open("GET", url, true);
		xhttp.send();
	}, 1000);
}
</script>
