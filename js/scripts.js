let header = `<header id="header">
		<a class="logo blockchain-explained" href="./index.html"></a>
		<nav>
			<ul>
				<li><a href="./tech.html">How it Works</a></li>
				<li><a href="./uses.html">Applications</a></li>
			</ul>
		</nav>
	</header>`;
let footer = `<footer>
		<div class="foot-content">
		<h3>Contact Me</h3>
		<!-- map -->
		<iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.472617598638!2d-79.9449119844052!3d40.44267537936203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f2219059e091%3A0x47888be8ae0bea3a!2s5000+Forbes+Ave%2C+Pittsburgh%2C+PA+15213!5e0!3m2!1sen!2sus!4v1517873012887" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
		<nav>
			<ul>
				<li><a class="icon mail" href="mailto:yniou@andrew.cmu.edu"></a></li>
				<li><a class="icon phone" href="tel:1-123-456-7890"></a></li>
				<li><a class="icon maps" href="https://maps.google.com/maps?ll=40.442675,-79.942723&z=15&t=m&hl=en-US&gl=US&mapclient=embed&q=5000%20Forbes%20Ave%20Pittsburgh%2C%20PA%2015213"></a></li>
			</ul>
		</nav>
		<!-- copyright -->
		<p class="copyright">&copy; Mimi Niou</p>
		</div>
	</footer>`;

$(document).ready(function() {
	$('body').append(footer);
	$('body').prepend(header);
	console.log("Finished loading header and footer.");
});