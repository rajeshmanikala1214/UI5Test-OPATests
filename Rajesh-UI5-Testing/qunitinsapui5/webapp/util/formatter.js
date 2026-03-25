sap.ui.define([],function(){
	return{
		getStatus: function(value){
			switch (value) {
				case "Available":
					return 'Success';
				case "Out of Stock":
					return 'Warning';
				case "Discontinued":
					return 'Error';
				default:
			}
		},

		splitTimeToDays: function (nMinutes) {
		if (!nMinutes) {
			return "0";
		}
		if (Number(nMinutes) < 60) {
			return `${nMinutes} Minutes`;
		}
		const numberOfHours = Number(nMinutes) / 60;
		const Days = Math.round(numberOfHours / 24);
		const Remainder = numberOfHours % 24;
		const Hours = Math.round(Remainder);
		let sTime = "";
		if (Days) {
			if (Days === 1) {
				sTime = Days + 'Day';
			} else {
				sTime = Days + 'Days';
			}
		}
		if (Hours) {
			if (Hours === 1) {
				sTime = sTime + ` ${Hours}` + 'Hour';
			} else {
				sTime = sTime + ` ${Hours}` + 'Hours';
			}
		}
		return sTime;
	}
	};
});