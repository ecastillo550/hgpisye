<?php
namespace Hagane\Resource;

class Maestros extends AbstractResource{
	function load() {
		$this->get('/', function() {
			$data = array();
			$result = $this->db->query('SELECT * FROM Maestro', $data);
			$this->message->append('maestros', $result);
			echo $this->message->send();
		});
	}
}

?>