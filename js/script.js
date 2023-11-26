
function blankForm(id) {
  document.getElementById(id).value = ''
}
function hitungPersamaan() {
  a = document.getElementById('a').value
  if ( a == '' || a == null ) {
     a = 1
     aStr = ''
  } else {
    aStr = a
  }
  b = document.getElementById('b')
  if ( b.value == '' || b.value == null ) {
     b.className = 'notok lightfont'
  } else {
    b.className = 'ok'
    b = b.value
    bStr = b
    c = document.getElementById('c')
    if ( c.value == '' || c.value == null ) {
      c.className = 'notok lightfont'
    } else {
      c.className = 'ok'
      c = c.value
      cStr = c
      hasil = document.getElementById('hasil');
      akar = Math.sqrt((b * b) - (4 * a * c)) 
      if (isNaN(akar) == true) {
        hasil.innerHTML = '<div class="card shadow"><div class="mediumfont" style="float: right;"><</div><div>Hasil tidak tersedia<br>(bilangan imajiner)</div><div style="position: absolute; bottom: 10px; color: #888888;">' + aStr + 'x² + ' + bStr + 'x + ' + cStr + ' = 0</div></div>' + hasil.innerHTML
      } else {
        hasilX1 = (-b + akar) / (2 * a)
        hasilX2 = (-b - akar) / (2 * a)
        hasilX1str = String(hasilX1)
        hasilX2str = String(hasilX2)
        if (hasilX1str.indexOf('.') !== -1 ) {
          hasilX1 = hasilX1.toFixed(6)
        } else {
          undefined
        }
        if (hasilX2str.indexOf('.') !== -1 ) {
          hasilX2 = hasilX2.toFixed(6)
        } else {
          undefined
        }
        hasil.innerHTML = '<div class="card shadow"><div class="mediumfont" style="float: right;"><</div><div>x = ' + hasilX1 + ' atau<br>x = ' + hasilX2 + '</div><div style="position: absolute; bottom: 10px; color: #888888;">' + aStr + 'x² + ' + bStr + 'x + ' + cStr + ' = 0</div></div>' + hasil.innerHTML
      }
    }
  }
}