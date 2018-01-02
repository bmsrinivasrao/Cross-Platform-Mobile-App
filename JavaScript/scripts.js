var load = 0;

function logInFun() {

    if (validation()) {
        document.getElementById("cred").style.display = "none";
        load++;
        document.getElementById("logInBtnID").innerHTML = "Loading";
        window.setTimeout(second, 1000);

        function second() {
            document.getElementById("logInBtnID").innerHTML = "Loading.";
            window.setTimeout(third, 1000);
        }

        function third() {
            document.getElementById("logInBtnID").innerHTML = "Loading..";
            window.setTimeout(forth, 1000);
        }

        function forth() {
            document.getElementById("logInBtnID").innerHTML = "Loading...";
            window.setTimeout(logInFun, 1000);
        }

        if (load == 2) {
            window.location.href = "Home.html";
        }
    }
}


function validation() {
    var username = document.getElementById("userID").value;
    var password = document.getElementById("passID").value;
    if (username == "" && password == "") {
        $('.MainContainer').addClass('opc');
        document.getElementById("alertDiv").style.display = "block";
        document.getElementById("alert").innerHTML = "<br> &#xf06a; Please enter username & password!";
        return false;
    } else if (username == "") {
        $('.MainContainer').addClass('opc');
        document.getElementById("alertDiv").style.display = "block";
        document.getElementById("alert").innerHTML = "<br> &#xf06a; Please enter username!";
        return false;
    } else if (password == "") {
        $('.MainContainer').addClass('opc');
        document.getElementById("alertDiv").style.display = "block";
        document.getElementById("alert").innerHTML = "<br>&#xf06a; Please enter password!";
        return false;
    } else {
        var username = document.getElementById("userID").value;
        var password = document.getElementById("passID").value;
        if (username == "Demo" && password == "Demo") {
            document.getElementById("alertDiv").style.display = "none";
            return true;
        } else {
            $('.MainContainer').addClass('opc');
            document.getElementById("alertDiv").style.display = "block";
            document.getElementById("alert").innerHTML = "<br> &#xf06a; Incorrect credentials!";
        }

    }
}

function alterOkFun() {
    document.getElementById("alertDiv").style.display = "none";
    $('.MainContainer').removeClass('opc');
}

$(function () {
    document.getElementById("ios").style.background = "none";
    document.getElementById("ios").style.color = "#455A64";
    document.getElementById("android").style.background = "#009688";
    document.getElementById("android").style.color = "#fff";

    function getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }
        return os;
    }

    if (getOS() == "Android") {
        document.getElementById("ios").style.background = "none";
        document.getElementById("ios").style.color = "#455A64";

        document.getElementById("android").style.background = "#009688";
        document.getElementById("android").style.color = "#fff";
        document.getElementById("rx_icon").style.display = "block";
        document.getElementById("iOSMenu").style.display = "none";

        document.getElementById("home").style.paddingBottom = "5px";
        document.getElementById("pSearch").style.paddingBottom = "5px";
        document.getElementById("Claims").style.paddingBottom = "5px";
        document.getElementById("Account").style.paddingBottom = "5px";
    }

    if (getOS() == "iOS") {
        document.getElementById("android").style.background = "none";
        document.getElementById("android").style.color = "#455A64";

        document.getElementById("ios").style.background = "#009688";
        document.getElementById("ios").style.color = "#fff";
        document.getElementById("iOSMenu").style.display = "block";
        document.getElementById("rx_icon").style.display = "none";

        document.getElementById("home").style.paddingBottom = "26px";
        document.getElementById("pSearch").style.paddingBottom = "26px";
        document.getElementById("Claims").style.paddingBottom = "26px";
        document.getElementById("Account").style.paddingBottom = "26px";
    }
});

function close1() {
    document.getElementById("Account").style.display = "none";
    document.getElementById("Claims").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("pSearch").style.display = "none";
}

function home1() {
    document.getElementById("topBarText").innerHTML = "<i class='fa fa-medkit' aria-hidden='true'></i>  My Health Plan";
    close1();
    document.getElementById("home").style.display = "block";
}

function providerSearch1() {
    document.getElementById("topBarText").innerHTML = "<i class='fa fa-search' aria-hidden='true''></i> Provider Search";
    close1();
    document.getElementById("pSearch").style.display = "block";
}

function myCare1() {
    document.getElementById("topBarText").innerHTML = "<i class='fa fa-exchange' aria-hidden='true'></i> My Care Compare";
    close1();
}

function accountBalance1(val) {
    document.getElementById("topBarText").innerHTML = "<i class='fa fa-bar-chart' aria-hidden='true'></i> Account Balance";
    if (val == "home") {
        document.getElementById("home").style.display = "none";
        document.getElementById("Account").style.display = "block";
    } else {
        close1();
        document.getElementById("Account").style.display = "block";
    }
}

function claims1(val) {
    document.getElementById("topBarText").innerHTML = "<i class='fa fa-calendar' aria-hidden='true''></i> Claim Summary";
    if (val == "home") {
        document.getElementById("home").style.display = "none";
        document.getElementById("Claims").style.display = "block";
    } else {
        close1();
        document.getElementById("Claims").style.display = "block";
    }

}

function idCard1() {
    document.getElementById("topBarText").innerHTML = "<i class='fa fa-id-card-o' aria-hidden='true'></i> ID Card";
    close1();
}

function opBtnClick(val) {
    if (val == "Android") {
        document.getElementById("ios").style.background = "none";
        document.getElementById("ios").style.color = "#455A64";

        document.getElementById("android").style.background = "#009688";
        document.getElementById("android").style.color = "#fff";
        document.getElementById("rx_icon").style.display = "block";
        document.getElementById("iOSMenu").style.display = "none";

        document.getElementById("home").style.paddingBottom = "5px";
        document.getElementById("pSearch").style.paddingBottom = "5px";
        document.getElementById("Claims").style.paddingBottom = "5px";
        document.getElementById("Account").style.paddingBottom = "5px";
    }

    if (val == "iOS") {
        document.getElementById("android").style.background = "none";
        document.getElementById("android").style.color = "#455A64";

        document.getElementById("ios").style.background = "#009688";
        document.getElementById("ios").style.color = "#fff";
        document.getElementById("iOSMenu").style.display = "block";
        document.getElementById("rx_icon").style.display = "none";

        document.getElementById("home").style.paddingBottom = "26px";
        document.getElementById("pSearch").style.paddingBottom = "26px";
        document.getElementById("Claims").style.paddingBottom = "26px";
        document.getElementById("Account").style.paddingBottom = "26px";
    }
}
