sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"demo/app/util/formatter"
], function(Controller, Formatter) {
	"use strict";

	return Controller.extend("demo.app.controller.View1", {
		formatter: Formatter,

		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
		},

		onItemSelect: function(oEvent){
			const oSelectedItem = oEvent.getParameter("listItem");
			const sTitle = oSelectedItem.getTitle();
			this.onNext(sTitle);
		},

		oRouter: null,

		onSelectChange: function(oEvent){
			const oList = oEvent.getSource();
			// var aItems = oList.getSelectedItems();
			// for (var i=0; i<aItems.length; i++) {
			// 	console.log(aItems[i].getTitle());
			// }
			//Technique 1: to send data but can only send FIELD by FIELD
			//if we have 100 fields, we will have 100 lines of code and multiply
			// var sTitle = oList.getSelectedItem().getTitle();
			// this.onNext(sTitle);

			//Technique 2: Bind the complete View 2 with the element selected
			// --> /fruits/2 -- {name: '', color: '', ....}
			const sPath = oList.getSelectedItem().getBindingContextPath();
			const sIndex = sPath.split("/")[sPath.split("/").length - 1];
			this.onNext(sIndex);
			// var oView2 = this.getView().getParent().getParent().getDetailPages()[1];
			// oView2.bindElement(sPath);

		},
		onSearch: function(oEvent){
			//Step 1: get the value entered by user on screen
			let sSearchValue = oEvent.getParameter("query");
			if(!sSearchValue){
				sSearchValue = oEvent.getParameter("newValue");
			}
			//Step 2: prepare a filter object - 2 operands and 1 operator
			const oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, sSearchValue);
			const oFilter2 = new sap.ui.model.Filter("type", sap.ui.model.FilterOperator.Contains, sSearchValue);
			const aFilter = [oFilter, oFilter2];
			const oFilterFinal = new sap.ui.model.Filter({
				filters: aFilter,
				and: false
			});
			//Step 3: get the control on which filter needs to be applied (List)
			const oList = this.getView().byId("idList");
			//step 4: Inject the filter into the binding of list
			oList.getBinding("items").filter(oFilterFinal);
		},
		onNext: function(sIndex){
			// WHO IS RESPONSIBLE FOR NAVIGATION
			this.oRouter.navTo("detail",{
				navya: sIndex
			});
			//Step 1: Get The Container object for this view
			//Now it is Split App Container Object
			// var oParent = this.getView().getParent().getParent();

			// //Step 2: go to view 1 from parent
			// var oView2 = oParent.getDetailPages()[1];
			// //Step 3: get the child of the view1 (viz. search field )
			// var oPage = oView2.getContent()[0];
			// //Step 4: get the value
			// oPage.setTitle(sTitle);

			// //Step 2: use that to navigate to second view
			// oParent.toDetail("idView2");
		}

	});

});
