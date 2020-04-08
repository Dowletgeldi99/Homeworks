var btn = document.getElementById('btn');
var xhr = new XMLHttpRequest();
var mainTab = document.createElement('div');
var contentTab = document.createElement('div');
var divTabs = "<div class = 'tabs'></div>";
var divTabsContent = "<div class = 'tabs-content hide'></div>";



if(localStorage.getItem('data') === null) {
    btn.onclick = function() {
    
    
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        xhr.send();
        xhr.onload = function() {
            localStorage.setItem('data', xhr.response.data);
            var statusType = +String(this.status)[0];
            var dataLength = JSON.parse(this.response).data.length;
            
            if ( (statusType === 2) || (statusType === 3) ) {
                document.body.appendChild(mainTab);
                mainTab.classList.add('mainTab');
                
                for (var i = 1; i < dataLength + 1; i++) {
                    mainTab.innerHTML += divTabs;
                }
    
                mainTab.childNodes.forEach(function(item, i) {
                    item.innerText = 'User ' + (i + 1);
                    item.setAttribute('id', 'tabs' + (i+1));
                });
                
                
                mainTab.appendChild(contentTab);
                contentTab.classList.add('contentTab');
                contentTab.innerHTML = divTabsContent;
                
                for (var k = 1; k < dataLength; k++) {
                    contentTab.innerHTML += divTabsContent;
                }
                
                var a = []; 
                JSON.parse(this.response).data.forEach(function(item, i) {
                    for (var key in item) {
                        contentTab.childNodes[i].innerText += key + ' : ' + item[key] + '\n';
                    }
                });
                
                contentTab.childNodes.forEach(function(item, i) {
                    item.setAttribute('id', 'content' + (i + 1));
                });
    
                var allContents = document.getElementsByClassName('tabs-content');
                allContents[0].classList.add('active');
                allContents[0].classList.remove('hide');
                
                mainTab.onclick = function(event) {
                    var target = event.target;
    
                    var targetId = target.id;
                    var numOfId = +targetId[targetId.length - 1];
    
                    
                    for (var j = 0; j < allContents.length; j++) {
                        allContents[j].classList.add('hide');
                        if( (+allContents[j].id[allContents[j].id.length - 1]) === numOfId ) {
                            console.log(allContents[j]);
                            allContents[j].classList.add('active');
                            allContents[j].classList.remove('hide');
    
                        }
                    }
                };
                
                
                    
                  
            } else {
                document.body.innerHTML += "<div>Данные не пришли</div>"
            }
        };
    };
}




