for f in *.json
do
  curl -X PUT -H "Content-Type: application/json" -d "@$f" localhost:8080/collaborator
  echo " <- $f"
done
