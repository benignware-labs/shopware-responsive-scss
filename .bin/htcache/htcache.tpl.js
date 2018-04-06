<FilesMatch "<%- pattern %>">
    <IfModule mod_expires.c>
        ExpiresActive on
        ExpiresDefault "access plus 1 year"
    </IfModule>

    <IfModule mod_headers.c>
        Header set Cache-Control "max-age=<%- maxAge %>, public"
        Header unset ETag
    </IfModule>

    FileETag None
</FilesMatch>
