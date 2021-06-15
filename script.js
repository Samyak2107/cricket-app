var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const apiTeams = "https://cricket.sportmonks.com/api/v2.0/players?api_token=hPmfO9f2XPGUXxBgbuk6CMYCLyQWr3VmvlD7MkCG4yWmGY2U4wmHir3eIQ9L"
  
 // fetch(apiTeams, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const imgPlayer = result[0].image_path;
        const p1name = result[0].fullname;
        document.getElementById('imgp1').src = `${imgPlayer}`;
        document.getElementById('p1').innerHTML = `${p1name}`;
    })
    .catch(error => console.log('error', error));