<script lang="ts">
	import { Recaptcha, recaptcha, observer } from 'svelte-recaptcha-v2'

	// const GOOGLE_RECAPTCHA_SITE_KEY="6LdaWXcmAAAAAP0kZK1X2kD9Vz0QkmfU8vWvt5MC";
	const GOOGLE_RECAPTCHA_SITE_KEY = '6LdKfowmAAAAACNAYd-zm-ZEPFQK_WyuUz6bCdKt'

    
	const onCaptchaReady = (event: any) => {
		console.log('recaptcha init has completed.')
		/*
     │You can enable your form button here.
     */
	}

	const onCaptchaSuccess = (event: any) => {
		// userTracker.resolve(event);
		console.log('token received: ' + event.detail.token)
		/*
     │If using checkbox method, you can attach your
     │form logic here, or dispatch your custom event.
     */
	}

	const onCaptchaError = (event: any) => {
		console.log('recaptcha init has failed.')
		/*
     │Usually due to incorrect siteKey.
     |Make sure you have the correct siteKey..
     */
	}

	const onCaptchaExpire = (event: any) => {
		console.log('recaptcha api has expired')
		/*
     │Normally, you wouldn't need to do anything.
     │Recaptcha should reinit itself automatically.
     */
	}

	const onCaptchaOpen = (event: any) => {
		console.log('google decided to challange the user')
		/*
     │This fires when the puzzle frame pops.
     */
	}

	const onCaptchaClose = (event: any) => {
		console.log('google decided to challange the user')
		/*
     │This fires when the puzzle frame closes.
     │Usually happens when the user clicks outside
     |the modal frame.
     */
	}
</script>
