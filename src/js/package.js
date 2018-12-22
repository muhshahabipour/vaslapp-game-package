'use strict'

import $ from "jquery";
import notie from "notie";
import PackagesList from "./packagesList";
import PackageItem from "./packageItem";
import { getEmptyTemplate } from "./templates/package-empty";
import { getAddPackageTemplate } from "./templates/package-add-button";
import { getPackageWrapperTemplate } from "./templates/package-wrapper";
import { getPackageTemplate } from "./templates/package-item";

import "../scss/style.scss";

// var guid = function () {
//     return '_' + Math.random().toString(36).substr(2, 9);
// };


// Singleton design pattern
var gamePackage = (function () {

    var option = [];

    var packagesList = new PackagesList();


    var setData = function (data) {
        data.forEach(function (packageItem) {
            var item = new PackageItem(packageItem);
            packagesList.addPackageItem(item);
        })
        renderItems();
    };


    // ================================================================================================================================================


    var setOption = function (data) {
        option = data || []
    };

    var changeEventListener = function () {

        $('select').on("change", function (event) {
            var $item = $(event.currentTarget);
            packagesList.updateValueNestedPackageItem($item.data("id"), $item.data("name"), $item.val());
        })

        $(".package-list-wrapper input[type=text]").off("input");
        $(".package-list-wrapper input[type=text]").on("input", function (event) {
            var $item = $(event.currentTarget);
            packagesList.updateValueNestedPackageItem($item.data("id"), $item.data("name"), $item.val());
        });

    };


    // ================================================================================================================================================



    var deleteEventListener = function () {
        $(".remove-section").off("click");
        $(".remove-section").on("click", function (event) {
            var elm = $(event.currentTarget);
            deleteConfirm(elm.data("id"), elm.data("type"));
        });
    };

    var addSubItemEventListener = function () {
        $(".add-section").off("click");
        $(".add-section").on("click", function (event) {
            var elm = $(event.currentTarget);
            addSubItem(elm.data());
        })
    };

    var addItemEventListener = function () {
        $("#add-new-package").off("click");
        $("#add-new-package").on("click", function () {
            addItem();
        })
    };


    // ================================================================================================================================================


    var deleteConfirm = function (id, type) {
        notie.confirm({
            text: "آیا مایل به حذف این مورد هستید؟",
            submitText: "بله",
            cancelText: "خیر",
            submitCallback: function () {
                packagesList.removePackageItem(id, type);
                renderItems();
            }
        });
    };

    var addItem = function () {
        var packageItem = new PackageItem();
        packagesList.addPackageItem(packageItem);
        renderItems();
    }

    // ================================================================================================================================================



    var renderItems = function () {

        $('.package-wrapper').html("");
        var packageWrarpperTemplate = getPackageWrapperTemplate();
        $('.package-wrapper').append(packageWrarpperTemplate);

        var addPackageTemplate = getAddPackageTemplate();
        $('.package-wrapper').append(addPackageTemplate);


        $('.package-list-wrapper').html("");
        var list = packagesList.getList();



        if (list.length) {
            var rendered = getPackageTemplate(option, list);
            $('.package-list-wrapper').append(rendered);
        } else {
            var emptySection = getEmptyTemplate();
            $('.package-list-wrapper').append(emptySection);
        }


        deleteEventListener();
        addSubItemEventListener();
        addItemEventListener();
        changeEventListener();
    };


    // ================================================================================================================================================


    var getData = function () {
        return packagesList.getList();
    }

    // ================================================================================================================================================


    deleteEventListener();
    addSubItemEventListener();
    addItemEventListener();
    changeEventListener();
    renderItems();


    return {
        addItem: addItem,
        setData: setData,
        getData: getData,
        setOption: setOption
    };


})();



export default gamePackage;

// var a = [{
//     name: "$LEVEL_5b5c12b78201b400064f27ca",
//     title: "سطح - سطح امتیاز بازی"
// }, {
//     name: "$LEVEL_5b964be12ced29000745650b",
//     title: "سطح - قهرمانان"
// }, {
//     name: "$LEVEL_5b975a4c3b2d8d00079378be",
//     title: "سطح - lgxpGroups"
// }, {
//     name: "$LEVEL_5b98a1c63b2d8d00079378c4",
//     title: "سطح - سطح 1"
// }, {
//     name: "$XP_5b5d9f446009270007434167",
//     title: "امتیازبندی بازی"
// }, {
//     name: "$RP_5b964b342ced29000745650a",
//     title: "gem"
// }, {
//     name: "$XP_5b975a273b2d8d00079378bd",
//     title: "lgXP"
// }, {
//     name: "$XP_5ba61de2e0371700066d45df",
//     title: "gem"
// }, {
//     name: "$RP_5bb1e81eb6addd0007d9cb85",
//     title: "exir"
// }, {
//     name: "$XP_5bb8b8998fcc2c000747e41e",
//     title: "Overal"
// }, {
//     name: "$XP_5bb9a2308fcc2c000747e41f",
//     title: "inc10points"
// }, {
//     name: "$RP_5bbddfe5f8b38c00077a9c68",
//     title: "gem"
// }, {
//     name: "$XP_5bbde09df8b38c00077a9c69",
//     title: "question xp point"
// }, {
//     name: "$XP_5bc5891418be4900060becc3",
//     title: "fee"
// }]

// gamePackage.setOption(a);

// var b = {
//     data: [{
//         point: "$XP_5bc5891418be4900060becc3",
//         number: "10",
//         price: "10000"
//     }, {
//         point: "$RP_5bb1e81eb6addd0007d9cb85",
//         number: "20",
//         price: "20000"
//     }, {
//         point: "$RP_5b964b342ced29000745650a",
//         number: "30",
//         price: "30000"
//     }, {
//         point: "$RP_5b964b342ced29000745650a",
//         number: "40",
//         price: "40000"
//     }],
// }

// gamePackage.setData(b.data)