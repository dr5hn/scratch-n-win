
import dynamic from 'next/dynamic';

const { ScratchCard, SCRATCH_TYPE } = dynamic(
  () => import('scratchcard-js'),
  { ssr: false }
)

const scContainer = document.getElementById('js--sc--container')
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.SPRAY,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: '/images/scratchcard.jpg',
  imageBackgroundSrc: '/images/result.png',
  htmlBackground: '<p class="test"><strong>Hello i am HTML content !</strong></p>',
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    alert('Now the window will reload !')
    // window.location.reload()
  }
});

// Init
sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(2)
    console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});

function ScratchCardComp() {
    return (
        <div id="s--sc--container"></div>
    )
}

export default ScratchCardComp;
