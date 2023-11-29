function addReleases() {
    var releases = [
        { version: "2.23.11.29 (latest)", fileName: "QualiTTVBot_2_23_11_29.zip" },
    ]
    
    releases.forEach(function (release) {
        var filePath = "releases/" + release.fileName;
        
        var xhr = new XMLHttpRequest();

        xhr.open("HEAD", filePath, true);

        xhr.onreadystatechange = function () {
            if (this.readyState === this.DONE) {
                var fileSize = parseInt(xhr.getResponseHeader("Content-Length"));
                var table = document.getElementById("file-table");

                var row = table.insertRow();
                var versionCell = row.insertCell(0);
                var fileSizeCell = row.insertCell(1);
                var downloadCell = row.insertCell(2);

                versionCell.innerHTML = release.version;
                fileSizeCell.innerHTML = (fileSize / 1024 / 1024).toFixed(2) + " MB";
                downloadCell.innerHTML = "<a href='" + filePath + "' class='btn btn-outline-primary'><i class='bi bi-download'></i> " + release.fileName + "</a>";
            }
        };

        xhr.send();
    });
}