var string = `
int main() {
    fastIO();
    //cout<<setprecision(7);
    //freopen("in.txt","r",stdin);
    //freopen("out.txt","w",stdout);
    cin>>n>>m;
    for(int i=0; i<n; i++)cin>>a[i],mpa[a[i]]++;
    for(int i=0; i<m; i++)cin>>b[i],mpb[b[i]]++;
    for(auto x:mpb) {
        ans+=mpa[x.F]*mpb[x.F];
    }
    cout<<ans;
    return 0;
}


`;

 /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',50); /* change 70 for speed */

}
frameLooper();