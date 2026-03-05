package modulos;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;

public class Main {
    public static void main (String[] args){

        //VARIABLES REQUIEREN ENTRADA DE DATOS DEL CLIENTE

        int idCliente; //CC.
        String nombreCliente;
        String correoClien;
        String claveAcc;

        //VARIABLES QUE NO REQUIEREN ENTRADA DE DATOS DEL CLIENTE
        int numCliente;
        String historiaCompra;
        String productos;
        String comparaPrecio;
        String nombreSuper;
        String direcionSuper;
        String supFavo;
        String nombreProd;
        String descripción;
        String tamañoProd;
        String prodFavo;
        LocalDateTime fecha;
        List listaCompra;
        int idCompra;
        int idLista;
        int idCarrito;
        int idSuper;
        int idProducto;
        double precioProd;


        //ENTRADA DE DATOS USUARIO
        /*
        idCliente = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingresa tu ID personal"));
        System.out.println(idCliente);

        nombreCliente = String.join(JOptionPane.showInputDialog(null, "Ingresa tu nombre"));
        System.out.println(nombreCliente);

        correoClien = String.join(JOptionPane.showInputDialog(null, "Ingresa tu correo"));
        System.out.println(correoClien);

        claveAcc = String.join(JOptionPane.showInputDialog(null, "Ingresa clave acceso"));
        System.out.println(claveAcc);
        */

        //PROCESAMIENTO DATOS




        // SALIDA DE DATOS
        int funcioNalidad = Integer.parseInt(JOptionPane.showInputDialog(null, "Aqui funciona"));
        System.out.println(funcioNalidad);






    }

}