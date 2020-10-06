/* Questão 01
Crie uma data que guarda o momento atual.

Questão 02
Crie uma data que guarda o momento da ceia de natal do ano passado. Suponha a ceia é as 21h30 no seu fuso horário.*/

const agora = new Date();

const natal = new Date(20019, 11, 31, 9, 30);


// casa


// questão 03
const registros = [
    {
      "name": "Kirkland",
      "company": "ECLIPSENT",
      "registered": "Mon Dec 07 2015 07:01:50 GMT+0000"
    },
    {
      "name": "Elise",
      "company": "ILLUMITY",
      "registered": "Fri Mar 02 2018 11:37:56 GMT+0000"
    },
    {
      "name": "Waters",
      "company": "PERMADYNE",
      "registered": "Tue Apr 09 2019 08:31:31 GMT+0000"
    },
    {
      "name": "Tanner",
      "company": "MIRACLIS",
      "registered": "Wed Nov 14 2018 16:11:14 GMT+0000"
    },
    {
      "name": "Knapp",
      "company": "ENDIPIN",
      "registered": "Sun Jul 30 2017 00:05:33 GMT+0000"
    },
    {
      "name": "Beverly",
      "company": "MYOPIUM",
      "registered": "Thu Sep 07 2017 16:13:51 GMT+0000"
    },
    {
      "name": "Mcfarland",
      "company": "JASPER",
      "registered": "Mon Sep 14 2020 10:02:15 GMT+0000"
    },
    {
      "name": "Vaughan",
      "company": "ULTRIMAX",
      "registered": "Tue May 06 2014 00:08:34 GMT+0000"
    },
    {
      "name": "Parker",
      "company": "LUXURIA",
      "registered": "Tue Jun 16 2020 14:13:29 GMT+0000"
    }
]

const ordenarRegistros = () => {
    registros.sort((a, b) => {
        let momentoA = new Date(a.registered);
        let momentoB = new Date(b.registered);
        
        if ((+momentoA) > (+momentoB)) {
            return 1;
        } else if (momentoB > momentoA) {
            return -1;
        } else {
            return 0;
        }
    })
}

ordenarRegistros();
//console.log(registros);

// questão 04 e 05 (são a mesma?)

const horario = new Date();

const verificarHorario = (horario) => {
    const timestamp = (+horario);
    const horarioAbertura = new Date(2020, 9, 5, 8, 0);
    const horarioFechamento = new Date(2020, 9, 5, 18, 0);
    

    if (timestamp >= (+horarioAbertura) && timestamp <= (+horarioFechamento)) {
        console.log(true);
    } else {
        console.log(false)
    }

}

verificarHorario(horario);