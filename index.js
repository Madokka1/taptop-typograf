<script>
  setTimeout(() => {
    const PREPOSITIONS = /\s(а|в|во|да|до|за|и|из|из-за|из-под|к|ко|на|над|не|ни|но|о|об|от|по|под|при|про|с|со|то|у|я|он|из)\s/gi;
    function typograph(node) {
      if (node.nodeType === 3) {
        node.textContent = node.textContent.replace(PREPOSITIONS, (match, p1) => ` ${p1}\u00A0`);
      } else if (node.nodeType === 1 && !['SCRIPT','STYLE','TEXTAREA','INPUT'].includes(node.tagName)) {
        node.childNodes.forEach(typograph);
      }
    }
    typograph(document.body);
  }, 300);
</script>
