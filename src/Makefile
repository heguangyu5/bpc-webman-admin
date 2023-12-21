libwebman-admin.so:
	./bpc-prepare.sh src.list
	$(MAKE) -C ./build libwebman-admin

libwebman-admin:
	bpc -v \
		-c ../../../bpc-webman/bpc.conf \
		--copt -Wno-trigraphs \
		--pseudo-class-list support\\Request \
		-l webman-admin \
		-u php-fileinfo             \
		-u php-gd                   \
		-u webman-captcha           \
		-u intervention-image       \
		-u psr-log                  \
		-u psr-container            \
		-u fastroute                \
		-u monolog                  \
		-u workerman                \
		-u doctrine-inflector       \
		-u illuminate-contracts     \
		-u illuminate-container     \
		-u illuminate-support       \
		-u illuminate-events        \
		-u illuminate-pagination    \
		-u illuminate-database      \
		-u webman                   \
		--input-file src.list

install-libwebman-admin:
	cd build && bpc -l webman-admin --install
