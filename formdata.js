function getParams(){
                var idx = document.URL.indexOf('?');
                var params = new Array();
                if (idx != -1) {
                    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
                    for (var i=0; i<pairs.length; i++){
                        nameVal = pairs[i].split('=');
                        params[nameVal[0]] = nameVal[1];
                    }
                }
                return params;
            }
            params = getParams();
            Student = unescape(params["Student"]);
            Cours = unescape(params["Cours"]);
            fSDate = unescape(params["fSdate"]);
			fTDate = unescape(params["fTdate"]);
			CoursN = unescape(params["CoursN"]);
	document.getElementById("Sname").innerHTML = Student;
	document.getElementById("Scourse").innerHTML = Cours;
	document.getElementById("SfDate").innerHTML=fSDate;
	document.getElementById("StDate").innerHTML=fTDate;
	document.getElementById("SCname").innerHTML=CoursN;
