// Global Variables

const baseURL = "http://localhost/phpmvc/public";

// End Global Variabels

//01. Tombol (Buttons) --------------------------------

// Tombol Hapus --------------------------------
$('.tombol-hapus').on('click', function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    Swal.fire({
        title: 'Anda Yakin?',
        text: "Anda tidak akan bisa mengembalikan data yang terhapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hapuskan!',
        cancelButtonText: "Batalkan!"
    }).then((result) => {
        if (result.isConfirmed) {
            document.location.href = href;
        }
    })
});

// End Tombol Hapus ----------------------------

// Tombol Modal Tambah Data ----------------------
$('.tampilModalTambah').on('click', function(){
    $('#judulModal').html('Tambah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Tambah Data');
    $('#nama').val('');
    $('#nim').val('');
    $('#email').val('');
    $('#jurusan').val('Teknik Informatika');
});
// End Tombol Modal Ubah Data ------------------

// Tombol Modal Ubah Data ----------------------
$('.tampilModalUbah').on('click', function(){
    $('#judulModal').html('Ubah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Ubah Data');
    $('.modal-body form').attr('action', baseURL + '/mahasiswa/ubah');

    const id = $(this).data('id');

    $.ajax({
        url: baseURL + '/mahasiswa/getubah',
        data: {id : id}, // id sebelah kiri adalah data yang akan dikirimkan. Sedangkan id sebelah kanan adalah isi datanya.
        method: 'post',
        dataType: 'json',
        success: function(data){
            $('#id').val(data.id);
            $('#nama').val(data.nama);
            $('#nim').val(data.nim);
            $('#email').val(data.email);
            $('#jurusan').val(data.jurusan);
        }
    });
});
// End Tombol Modal Ubah Data ------------------

//END 01. Tombol (Buttons) -------------------------




//02. Metode (Functions) ---------------------------


//END 02. Metode (Functions) -----------------------


