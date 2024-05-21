const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // cambiar a clases porque no estaba mandandolo a llamar como clase
const $b = document.querySelector('.blog'); // cambiar a clases porque no estaba mandandolo a llamar como clase
//const $l = document.querySelector('.location'); //eliminarlo o ponerlo en el html porque no está  

async function displayUser(username) { // se agrega a la funcion async para que podamos usar await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  console.log(response); //se agrega el console 
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  //$l.textContent = '${data.location}'; // se comento porque no se usaba
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // se pone el simbolo de $
}

displayUser('stolinski').catch(handleError);