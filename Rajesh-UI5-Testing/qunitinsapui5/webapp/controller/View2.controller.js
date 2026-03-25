sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("demo.app.controller.View2", {


		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
		},

		herculis: function(oEvent){
			const navya = oEvent.getParameter("arguments").navya;
			const sPath = '/fruits/' + navya;
			this.getView().bindElement(sPath);
		},
		
		onBack: function(){
			//Step 1: Get The Container object for this view
			//var oParent = this.getView().getParent();
			//Step 2: use that to navigate to second view
			//oParent.to("idView1");
			this.oRouter.navTo("master");
		},

		onSave: function(){
			MessageBox.confirm("Hey dude! shall i save? " ,{
				title: "Maza Aavigiyo",
				onClose: function(status){
					if(status === "OK"){
						MessageToast.show("Sales order 8080 has been created Roger!!");
					}else{
						MessageBox.error("You break my heart :(");
					}
				}
			});
		}

	});

});