(  function() {
    var app = {
        tiendaTipoFilter: document.getElementById( "tiendaTipoFilter" ),
        ProductosList: [],
    }

    var loadData = function() {
        var xhttp = new XMLHttpRequest();
        var url = "http://127.0.0.1:8000/Producto/";


        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                console.log( this.responseText );
                var data = JSON.parse( this.responseText );
                displayProductos( data.results );
                app.ProductosList = data.results;
            }
        }
        xhttp.open( 'GET', url, true );
        xhttp.send();
    }

        var displayProductos = function( productos ) {
        var ProductosContainer = document.getElementById( "ProductosContainer");
        ProductosContainer.innerHTML = "";

        for( let producto of productos ) {
            var ProductoContainer = document.createElement( "div" );

            var imgProd = document.createElement( "img" );
            var txtProdName = document.createElement( "h3" );
            var txtProdTiendita = document.createElement( "p" );
            var txtProdDescription = document.createElement( "p" );
            var txtProdPrecio = document.createElement( "p" );
            var txtProdTipo = document.createElement( "p" );
            
            
            ProductoContainer.className = "ProductoContainer";
            txtProdName.innerHTML = producto.nombre_producto;

            imgProd.src = producto.imageUrl;
            imgProd.alt = producto.nombre_producto;

            txtProdDescription.innerHTML = "<b>Producto: </b>" +  producto.nombre_producto;
            txtProdTipo.innerHTML = "<b>Tientida: </b>" +  producto.nombre_tiendita;
            txtProdDescription.innerHTML = "<b>Descripción: </b>" +  producto.descripcion;
            txtProdTipo.innerHTML = "<b>Precio: </b>" +  producto.precio;
            txtProdPrecio.innerHTML = "<b>Tipo: </b>" + producto.tipo;
            
            ProductoContainer.appendChild( txtProdName );
            ProductoContainer.appendChild( imgProd );
            ProductoContainer.appendChild( txtProdTiendita );
            ProductoContainer.appendChild( txtProdDescription );
            ProductoContainer.appendChild( txtProdTipo );
            ProductoContainer.appendChild( txtProdPrecio );
            
            ProductosContainer.appendChild( ProductoContainer );
        }
    }
    
    loadData();
} ) ( );