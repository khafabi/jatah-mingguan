const pemasukan  = document.getElementById('pemasukanInput'); 
const pengeluaran= document.getElementById('pengeluaranInput');
const sisa       = document.getElementById('sisaInput') ;

output.style.visibility = 'hidden';

pengeluaran.addEventListener('input', (e) => {
  let pengeluaranVal = parseFloat(e.target.value);
  let pemasukanVal   = parseFloat(document.getElementById('pemasukanInput').value);
  let sisaVal        = parseFloat(document.getElementById('sisaInput').value);

  
  output.style.visibility = 'visible';

  let saldo = document.getElementById('saldoOutput');
  saldo.innerHTML = pemasukanVal+sisaVal-pengeluaranVal;

  let tabungan = document.getElementById('tabunganOutput');
  tabungan.innerHTML = (pemasukanVal+sisaVal-pengeluaranVal)*0.30;

  let budget = document.getElementById('budgetOutput');
  budget.innerHTML = (pemasukanVal+sisaVal-pengeluaranVal)-((pemasukanVal+sisaVal-pengeluaranVal)*0.30);
  
  let jatah = document.getElementById('jatahOutput');
  jatah.innerHTML = ((pemasukanVal+sisaVal-pengeluaranVal)-((pemasukanVal+sisaVal-pengeluaranVal)*0.30))/5;
  

  e.preventDefault();
});

pemasukan.addEventListener('input', (e) => {
  let pengeluaranVal = parseFloat(document.getElementById('pengeluaranInput').value);
  let pemasukanVal   = parseFloat(e.target.value);
  let sisaVal        = parseFloat(document.getElementById('sisaInput').value);

  
  output.style.visibility = 'visible';

  let saldo = document.getElementById('saldoOutput');
  saldo.innerHTML = pemasukanVal+sisaVal-pengeluaranVal;

  let tabungan = document.getElementById('tabunganOutput');
  tabungan.innerHTML = (pemasukanVal+sisaVal-pengeluaranVal)*0.30;


  let budget = document.getElementById('budgetOutput');
  budget.innerHTML = (pemasukanVal+sisaVal-pengeluaranVal)-((pemasukanVal+sisaVal-pengeluaranVal)*0.30);
  
  let jatah = document.getElementById('jatahOutput');
  jatah.innerHTML = ((pemasukanVal+sisaVal-pengeluaranVal)-((pemasukanVal+sisaVal-pengeluaranVal)*0.30))/5;
  
  e.preventDefault();
});

sisa.addEventListener('input', (e) => {
  let pengeluaranVal = parseFloat(document.getElementById('pengeluaranInput').value);
  let pemasukanVal   = parseFloat(document.getElementById('pemasukanInput').value);
  let sisaVal        = parseFloat(e.target.value);
  
  output.style.visibility = 'visible';

  let saldo = document.getElementById('saldoOutput');
  saldo.innerHTML = pemasukanVal+sisaVal-pengeluaranVal;

  let tabungan = document.getElementById('tabunganOutput');
  tabungan.innerHTML = (pemasukanVal+sisaVal-pengeluaranVal)*0.30;

  let budget = document.getElementById('budgetOutput');
  budget.innerHTML = (pemasukanVal+sisaVal-pengeluaranVal)-((pemasukanVal+sisaVal-pengeluaranVal)*0.30);
  
  let jatah = document.getElementById('jatahOutput');
  jatah.innerHTML = ((pemasukanVal+sisaVal-pengeluaranVal)-((pemasukanVal+sisaVal-pengeluaranVal)*0.30))/5;
  
  e.preventDefault();
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
    })
  })
}
