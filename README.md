# GUI und Express-API für den Protools-Workflow

**Lokale Installation**
git clone REPOSITORY_URL  
npm install  
*Starten der Web-GUI auf PORT:5173*  
npm run dev  
*Starten der Express-API auf PORT:3002*  
npm run dev-node  

Funktioniert nur mit installierter MariaDB oder MSSQL-Datenbank wie in /src/server/api.ts spezifiziert.

**Environment Variablen**

Folgende env-Variablen müssen in ein .env-File hinterlegt werden

SERVER="Host bzw. Instanzname der Datenbank"
DATABASE="database_name"
USERNAME="database_user_name"
PASSWORD="database_pwd"

Die restlichen env-Variablen machen nur im Kontext der vorhandenen Helmut4-Installation Sinn:

*URL unter der Helmut Jobs über die Helmut-API angelegt werden können*
HELMUT_OUTBOUND_URL="helmutUrl"
*Der Bearer-Token für die Helmut-API*
HELMUT_BEARER_TOKEN="helmutJwtToken"
*Der Pfad für die ProTools-Files wie er in der VM bzw. im Container gemountet ist.*
PROTOOLS_MOUNT="pathtoprotoolsfromContainer"
*Der Pfad für die ProTools-File auf dem Helmut-Filesystem*
PROTOOLS_PATH="pathtoprotoolsfromFileSystem"