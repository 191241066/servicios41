const functions = require('firebase-functions');

exports.recomienda = functions.https.onRequest(
  /** Código para la función recomienda.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      if (!request.query.opcion) {
        throw new Error("elige una opcion");
      } else if (!request.query.pildora) {
        throw new Error("elige una pildora");
      }
      let aux;
      const opc = request.query.opcion;
                const pil = request.query.pildora;

                if(request.query.opcion==1&&request.query.pildora==1||request.query.opcion==2&&request.query.pildora==1){
                  aux=`escojiste la pildora roja \nsaliendo de  la matrix al mundo real.........`;

                }else if(request.query.opcion==2&&request.query.pildora==2||request.query.opcion==1&&request.query.pildora==2){
                  aux=`escojiste la pildora azul  \nolvidaras todo y te quedaras en la matrix `;
                }else{
                  aux=`la opcion no es valida`;
                }
                const respuesta = `${aux}`;

      response.send(
        `${respuesta}`);
    } catch (e) {
      response.send(e.message);
    }
  });