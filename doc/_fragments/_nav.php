<ul class="su-old-horizontal"><?php if(!isset($actif)) $actif = ''; ?>
    <li><a href="/doc/installation.php" <?php if($actif=='installation') echo 'class="actif"' ?>>Installation</a></li>
    <li><a href="/doc/architecture-fonctionnelle.php" <?php if($actif=='archi') echo 'class="actif"' ?>>Architecture fonctionnelle</a></li>
    <li><a href="/doc/architecture-technique.php" <?php if($actif=='tech') echo 'class="actif"' ?>>Architecture technique</a></li>
    <li><a href="/doc/suivi.php" <?php if($actif=='suivi') echo 'class="actif"' ?>>Suivi</a></li>
    <li><a href="/dist/storybook" target="_blank">Catalogue</a></li>
</ul>
